import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatform';
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: Platform[];
}

const useGame = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    '/games',
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
