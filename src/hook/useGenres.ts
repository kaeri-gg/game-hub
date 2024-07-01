import useData from "./useData";

export interface Genre {
  id: number;
  img: string;
  name: string;
  link: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");
  return { error, isLoading, genres };
};

export default useGenres;
