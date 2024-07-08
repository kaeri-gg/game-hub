import useData from './useData';

export interface Genre {
  id: number;
  img: string;
  name: string;
  link: string;
}

const useGenre = () => {
  const { data: genres, error, isLoading } = useData<Genre>('api/genres.json');
  return { error, isLoading, genres };
};

export default useGenre;
