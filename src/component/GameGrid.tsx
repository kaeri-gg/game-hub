import { GameQuery } from '../App';
import useGame, { Game } from '../hook/useGame';
import GameCard from './GameCard';
import Skeletons from './Skeletons';
import { useEffect, useState } from 'react';

interface Props {
  gameQuery: GameQuery;
  //selectedGenre?: Genre | null;
  //selectedPlatform?: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const [filteredByPlatforms, setfilterByPlatforms] = useState<Game[]>([]);
  const [filteredBySortSelector, setfilterBySortSelector] = useState<Game[]>([]);
  const { games, error, isLoading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  // filtering platforms
  useEffect(() => {
    if (!gameQuery.platform) {
      // We just stop executing here
      return setfilterByPlatforms(games);
    }

    setfilterByPlatforms(
      games.filter(game => {
        return game.platforms.find(platform => platform.name === gameQuery.platform?.name);
      }),
    );
  }, [gameQuery.platform, games]);

  // temp1.sort((a, b) => {
  //   if (a.popularity > b.popularity) {
  //     return 1;
  //   } else if (a.popularity < b.popularity) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });
  useEffect(() => {
    console.log(filteredBySortSelector);
  }, [filteredBySortSelector]);

  //filtering by sort selector
  useEffect(() => {
    if (!gameQuery.sortItem) {
      return setfilterBySortSelector(games);
    }
    console.log(gameQuery.sortItem);
    setfilterBySortSelector(() => {
      if (gameQuery.sortItem?.slug === 'name') {
        return games.sort((a, b) => {
          let value = a.name.localeCompare(b.name);
          if (value === 0) return 0;
          else return -1;
        });
      } else if (gameQuery.sortItem?.slug === 'releaseDate') {
        return games.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
      } else if (gameQuery.sortItem?.slug === 'popularity') {
        return games.sort((a, b) => {
          if (a.popularity > b.popularity) {
            return 1;
          } else if (a.popularity < b.popularity) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      return games.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    });
  }, [gameQuery.sortItem, games]);

  return (
    <>
      <p>{error && 'Error Fetching data'}</p>

      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {/* filter for Platform Selector */}
          {filteredByPlatforms.length > 0 &&
            filteredByPlatforms.map(game => <GameCard key={game.id} game={game}></GameCard>)}

          {/* filter for Sort Selector */}
          {filteredByPlatforms.length === 0 &&
            filteredBySortSelector.length > 0 &&
            filteredBySortSelector.map(game => <GameCard key={game.id} game={game}></GameCard>)}

          {isLoading && skeletons.map(skeleton => <Skeletons key={skeleton}></Skeletons>)}

          {/* Display message if both filteredByPlatforms and filteredBySortSelector are empty */}
          {filteredByPlatforms.length === 0 && filteredBySortSelector.length === 0 && (
            <>No available data to display. o(TヘTo)</>
          )}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
