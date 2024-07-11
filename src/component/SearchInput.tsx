import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const search = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (search.current) return onSearch(search.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={search} borderRadius={20} placeholder="Search game..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
