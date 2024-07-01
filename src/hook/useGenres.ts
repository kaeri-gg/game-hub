import useData from "./useData";

export interface Genre {
  id: number;
  img: string;
  name: string;
  link: string;
}

const useGenres = (selectedGenre?: Genre | null) => {
  const {
    data: genres,
    error,
    isLoading,
  } = useData<Genre>("/genres", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
  return { error, isLoading, genres };
};

export default useGenres;
