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
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const { games, error, isLoading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (!gameQuery.platform) {
      // We just stop executing here
      return setFilteredGames(games);
    }

    setFilteredGames(
      games.filter(game => {
        return game.platforms.find(platform => platform.name === gameQuery.platform?.name);
      }),
    );
  }, [gameQuery.platform, games]);

  return (
    <>
      <p>{error && 'Error Fetching data'}</p>

      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {filteredGames.length === 0 && <>No Data</>}
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
          {isLoading && skeletons.map(skeleton => <Skeletons key={skeleton}></Skeletons>)}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
