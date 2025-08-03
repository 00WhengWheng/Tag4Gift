import React, { useEffect, useState } from 'react';
import { Button } from 'shadcn/ui';

interface GameTemplateProps {
  category: 'quiz' | 'reaction' | 'music' | 'puzzle';
}

interface GameConfig {
  title: string;
  description: string;
  entry: string;
}

const GameTemplate: React.FC<GameTemplateProps> = ({ category }) => {
  const [games, setGames] = useState<GameConfig[]>([]);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list of games from the category folder
    fetch(`/games/${category}/games.json`)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error('Error loading games:', error));
  }, [category]);

  if (selectedGame) {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <Button onClick={() => setSelectedGame(null)} className="mb-4">
          Back to Games
        </Button>
        <iframe
          src={`/games/${category}/${selectedGame}`}
          title="Selected Game"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select a Game</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
            <p className="text-sm mb-4">{game.description}</p>
            <Button onClick={() => setSelectedGame(game.entry)}>Play</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameTemplate;
