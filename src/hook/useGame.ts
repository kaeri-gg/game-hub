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

const useGame = () => {
  const {
    data: games, // "data" is renamed into "games"
    error,
    isLoading,
  } = useData<Game>('api/games.json');

  return { games, error, isLoading };
};

export default useGame;
