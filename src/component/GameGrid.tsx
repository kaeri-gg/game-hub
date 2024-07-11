import { GameQuery } from '../App';
import useGame, { Game } from '../hook/useGame';
import { Genre } from '../hook/useGenre';
import { Slug } from '../hook/useSortSelector';
import GameCard from './GameCard';
import Skeletons from './Skeletons';
import { useEffect, useState } from 'react';

interface Props {
  gameQuery: GameQuery;
  //selectedGenre?: Genre | null;
  //selectedPlatform?: Platform | null;
}
const GameGrid = ({ gameQuery }: Props) => {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const { games, error, isLoading } = useGame();

  const searchByName = (games: Game[], name: string) => {
    return games.filter(game => {
      return game.name.toLowerCase().includes(name.toLowerCase());
    });
  };

  const filterByPlatform = (games: Game[], name: string) => {
    return games.filter(game => {
      return game.platforms.find(platform => platform.name === name);
    });
  };

  const filterByGenre = (games: Game[], genre: Genre) => {
    return games.filter(game => game.genre === genre.name);
  };

  const sortBy = (games: Game[], slug: Slug) => {
    if (slug === 'name') {
      return games.sort((a, b) => {
        let value = a.name.localeCompare(b.name);

        if (value === 0) return 0;
        if (value === 1) return 1;
        return -1; // Default case
      });
    } else if (slug === 'releaseDate') {
      return games.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    } else if (slug === 'popularity') {
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

    // Default case, sort by string if slug has no match for if statements
    return games.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
  };

  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (filteredGames.length === 0) {
      setFilteredGames(games);
    }
  }, [games]);

  useEffect(() => {
    let gamesCopy: Game[] = structuredClone(games); // Clones the nested array of objects or object in general (removes reference)

    if (gameQuery.searchText) {
      gamesCopy = searchByName(gamesCopy, gameQuery.searchText);
    }

    if (gameQuery.platform) {
      gamesCopy = filterByPlatform(gamesCopy, gameQuery.platform.name);
    }

    if (gameQuery.genre) {
      gamesCopy = filterByGenre(gamesCopy, gameQuery.genre);
    }

    if (gameQuery.sortItem) {
      gamesCopy = sortBy(gamesCopy, gameQuery.sortItem.slug);
    }

    setFilteredGames(gamesCopy);
  }, [gameQuery]);

  return (
    <>
      <p>{error && 'Error Fetching data'}</p>

      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}

          {isLoading && skeletons.map(skeleton => <Skeletons key={skeleton} />)}

          {/* Display message if both filteredByPlatforms and filteredBySortSelector are empty */}
          {filteredGames.length === 0 && <>No available data to display. o(TヘTo) 😭🙃 </>}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
