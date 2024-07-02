import usePlatform, { Platform } from "../hook/usePlatform";
import { useState } from "react";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const Platforms = ({ onSelectedPlatform }: Props) => {
  const { platforms } = usePlatform();
  const [selected, setSelected] = useState<string>("All");

  // const handleFilter = (platform: Platform) => {
  //   return () => {
  //     console.log("Selected Platform: ", platform.platform);
  //     onSelectedPlatform(platform);
  //   };
  // };

  // const handleFilter = (platform: Platform) => () => {
  //   console.log("Selected Platform: ", platform.platform);
  //   onSelectedPlatform(platform);
  // };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Platforms ({selected})
      </button>
      <ul className="dropdown-menu">
        {platforms.map((platform) => {
          const handleFilter = () => {
            console.log("Selected Platform: ", platform.platform);
            onSelectedPlatform(platform);
            setSelected(platform.platform);
          };

          return (
            <li key={platform.id}>
              <a
                className="dropdown-item"
                href={"#" + platform.slug}
                onClick={handleFilter}
              >
                {platform.platform}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Platforms;
