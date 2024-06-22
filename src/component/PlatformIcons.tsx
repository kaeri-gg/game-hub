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

const PlatformIcons = ({ game }: { game: Game }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    applemacintosh: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <>
      {game.platform_parent.map((platform) => (
        <p className="card-text" key={platform.id}>
          {platform.platform}
        </p>
      ))}
    </>
  );
};

export default PlatformIcons;
