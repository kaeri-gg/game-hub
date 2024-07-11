import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" id="dark-mode" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap" marginBottom={0}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
