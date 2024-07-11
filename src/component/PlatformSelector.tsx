import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatform, { Platform } from '../hook/usePlatform';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { platforms } = usePlatform();
  const [selected, setSelected] = useState<string>('All');

  const handleFilter = (platform: Platform) => {
    return () => {
      onSelectedPlatform(platform);
      setSelected(platform.name);
    };
  };

  // const handleFilter = (platform: Platform) => () => {
  //   console.log("Selected Platform: ", platform.name);
  //   onSelectedPlatform(platform);
  // };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms ({selected})
      </MenuButton>
      <MenuList>
        {platforms.map(platform => {
          // const handleFilter = () => {
          //   onSelectedPlatform(platform);
          //   setSelected(platform.name);
          // };

          return (
            <MenuItem key={platform.id}>
              <a className="dropdown-item" href={'#' + platform.slug} onClick={handleFilter(platform)}>
                {platform.name}
              </a>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
