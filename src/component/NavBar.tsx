import {
  ColorModeScript,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  theme,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <HStack>
      {/* logo */}
      <Image src={logo} boxSize="60px" />

      {/* search input field */}
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search game..." />
      </InputGroup>

      {/* darkmode switch */}
      <FormControl display="flex">
        <FormLabel htmlFor="dark-mode" mb="0">
          Dark mode
        </FormLabel>
        <Switch id="dark-mode" isChecked />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </FormControl>
    </HStack>
  );
};

export default NavBar;
