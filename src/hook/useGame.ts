import useData from "./useData";
export interface Platform {
  id: number;
  name: string;
  link: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platform_parent: Platform[];
}

const useGame = (endpoint: string = "/games") => {
  const { data: games, error, isLoading } = useData<Game>(endpoint);
  return { games, error, isLoading };
};

export default useGame;
