import { HStack, Image } from '@chakra-ui/react';
import ggWhite from '../assets/gg-white.svg';
//import ggBlack from '../assets/gg-black.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack py="10px">
      {/* logo */}
      <Image src={ggWhite} boxSize="100px" />

      <SearchInput onSearch={onSearch} />

      {/* darkmode switch */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
