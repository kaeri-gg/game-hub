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

export interface Filter {
  genre?: string;
  platform?: string;
}

const useGame = (params?: Filter) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    {
      params,
    },
    [params?.genre, params?.platform]
  );
  return { games, error, isLoading };
};

export default useGame;
