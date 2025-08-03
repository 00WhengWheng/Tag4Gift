import React, { useState } from 'react';
import GameTemplate from '../components/GameTemplate';
import { Button } from 'shadcn/ui';

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'quiz' | 'reaction' | 'music' | 'puzzle' | null>(null);

  if (selectedCategory) {
    return (
      <div className="p-4">
        <Button onClick={() => setSelectedCategory(null)} className="mb-4">
          Back to Categories
        </Button>
        <GameTemplate category={selectedCategory} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Game Category</h1>
      <div className="grid grid-cols-2 gap-4">
        {['quiz', 'reaction', 'music', 'puzzle'].map((category) => (
          <Button key={category} onClick={() => setSelectedCategory(category as any)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
