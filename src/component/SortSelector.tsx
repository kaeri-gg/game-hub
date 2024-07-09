import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useSortSelector, { Sort } from '../hook/useSortSelector';
import { useState } from 'react';

interface Props {
  onSelectedSortItem: (sort: Sort) => void;
}
const SortSelector = ({ onSelectedSortItem }: Props) => {
  const { sortItem } = useSortSelector();
  const [selectedSortitem, setSelectedSortitem] = useState<string>('Relevance');

  const handleSort = (sort: Sort) => {
    return () => {
      onSelectedSortItem(sort);
      setSelectedSortitem(sort.name);
    };
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: ({selectedSortitem})
      </MenuButton>
      <MenuList>
        {sortItem.map(sort => (
          <MenuItem key={sort.id}>
            <a className="dropdown-item" onClick={handleSort(sort)}>
              {sort.name}
            </a>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
