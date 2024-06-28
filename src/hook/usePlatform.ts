import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  link: string;
}

const usePlatform = (endpoint: string = "/platforms") => {
  const { data: platforms, error, isLoading } = useData<Platform>(endpoint);
  return { error, isLoading, platforms };
};

export default usePlatform;
