import useData from './useData';

export interface Relevance {
  id: number;
  name: string;
  link: string;
}

const useRelevances = () => {
  const { data: relevances, error, isLoading } = useData<Relevance>('/relevances');
  return { error, isLoading, relevances };
};

export default useRelevances;
