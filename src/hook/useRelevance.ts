import useData from "./useData";

export interface Relevance {
  id: number;
  name: string;
  link: string;
}

const useRelevances = (endpoint: string = "/relevances") => {
  const { data: relevances, error, isLoading } = useData<Relevance>(endpoint);
  return { error, isLoading, relevances };
};

export default useRelevances;
