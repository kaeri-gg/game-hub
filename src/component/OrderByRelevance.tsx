import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useRelevances from '../hook/useRelevance';

const OrderByRelevance = () => {
  const { relevances } = useRelevances();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} ml={2}>
        Order by Relevance
      </MenuButton>
      <MenuList>
        {relevances.map(relevance => (
          <MenuItem key={relevance.id}>
            <a className="dropdown-item" href={relevance.link}>
              {relevance.name}
            </a>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderByRelevance;
