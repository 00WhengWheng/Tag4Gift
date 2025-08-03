import { Injectable } from '@nestjs/common';

interface GameMetadata {
  id: string;
  title: string;
  description: string;
  category: string;
}

@Injectable()
export class AppService {
  private games: GameMetadata[] = [
    { id: '1', title: 'Flappy Plane', description: 'Navigate the plane through obstacles.', category: 'reaction' },
    { id: '2', title: 'Road Cross', description: 'Help the character cross the road safely.', category: 'reaction' },
  ];

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getGames(): GameMetadata[] {
    return this.games;
  }

  getGameById(id: string): GameMetadata | undefined {
    return this.games.find((game) => game.id === id);
  }

  addGame(game: GameMetadata): void {
    this.games.push(game);
  }
}
