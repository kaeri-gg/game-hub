import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatform';
export interface Game {
  id: number;
  name: string;
  platforms: Platform[];
  genre: string;
  dateAdded: string;
  releaseDate: string;
  popularity: number;
  averageRating: number;
  metacritic: number;
  background_image: string;
}

const useGame = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    'api/games.json',
    {
      params: {
        genre: gameQuery.genre?.name,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery],
  );
  return { games, error, isLoading };
};

export default useGame;
