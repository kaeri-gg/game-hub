import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { Game } from '../hook/useGame';
import { IconType } from 'react-icons';
import { HStack, Icon } from '@chakra-ui/react';

const PlatformIcons = ({ game }: { game: Game }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    applemacintosh: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {game.platforms.map(platform => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
