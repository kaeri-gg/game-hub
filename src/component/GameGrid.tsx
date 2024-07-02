import useGame, { Game } from "../hook/useGame";
import { Genre } from "../hook/useGenre";
import { Platform } from "../hook/usePlatform";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";
import { useEffect, useState } from "react";

interface Props {
  selectedGenre?: Genre;
  selectedPlatform?: Platform;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const { games, error, isLoading } = useGame({
    genre: selectedGenre?.name,
  });

  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (!selectedPlatform) {
      // We just stop executing here
      return setFilteredGames(games);
    }

    setFilteredGames(
      games.filter((game) => {
        return game.platforms.find(
          (platform) => platform.platform === selectedPlatform?.platform
        );
      })
    );
  }, [selectedPlatform, games]);

  return (
    <>
      <p>{error && "Error Fetching data"}</p>

      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {filteredGames.length === 0 && <>No Data</>}
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
          {isLoading &&
            skeletons.map((skeleton) => <Skeletons key={skeleton}></Skeletons>)}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
