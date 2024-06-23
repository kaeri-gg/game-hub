import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { Game } from "../hook/useGame";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

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
    <div className="d-flex">
      {game.platform_parent.map((platform) => (
        <p className="card-text col-1" key={platform.id}>
          {/* {platform.platform} */}
          <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
        </p>
      ))}
    </div>
  );
};

export default PlatformIcons;
