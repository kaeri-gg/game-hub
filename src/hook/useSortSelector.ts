import useData from './useData';

export type Slug = 'name' | 'releaseDate' | 'popularity' | 'averageRatings' | 'dateAdded';
export interface Sort {
  id: number;
  name: string;
  slug: Slug;
}

const useSortSelector = () => {
  const { data: sortItem, error, isLoading } = useData<Sort>('api/sort-selectors.json');
  return { error, isLoading, sortItem };
};

export default useSortSelector;
