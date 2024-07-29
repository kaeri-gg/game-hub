import { HStack, Image, Show } from '@chakra-ui/react';
import ggWhite from '../assets/gg-white.svg';
//import ggBlack from '../assets/gg-black.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent={'space-between'}>
        {/* logo */}
        <Image src={ggWhite} boxSize="100px" />

        <Show above="sm">
          <SearchInput onSearch={onSearch} />
        </Show>

        {/* darkmode switch */}
        <ColorModeSwitch />
      </HStack>

      <Show below="sm">
        <SearchInput onSearch={onSearch} />
      </Show>
    </>
  );
};

export default NavBar;
