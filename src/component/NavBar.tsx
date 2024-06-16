import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
//import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {/* logo */}
      <Image src={logo} boxSize="60px" />

      {/* search input field */}
      {/* <SearchInput /> */}

      {/* darkmode switch */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;