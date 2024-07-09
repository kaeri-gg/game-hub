import useData from './useData';

export interface Sort {
  id: number;
  name: string;
  slug: string;
}

const useSortSelector = () => {
  const { data: sortItem, error, isLoading } = useData<Sort>('api/sort-selectors.json');
  return { error, isLoading, sortItem };
};

export default useSortSelector;
