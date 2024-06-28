import useData from "./useData";

export interface Genre {
  id: number;
  img: string;
  name: string;
  link: string;
}

const useGenres = (endpoint: string = "/genres") => {
  const { data: genres, error, isLoading } = useData<Genre>(endpoint);
  return { error, isLoading, genres };
};

export default useGenres;
