import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const { data: platforms, error, isLoading } = useData<Platform>('/platforms');
  return { error, isLoading, platforms };
};

export default usePlatform;
