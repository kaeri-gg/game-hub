import useGame from "../hook/useGame";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";

const GameGrid = () => {
  const { games, errors, isLoading } = useGame();

  return (
    <>
      <p>{errors && "Error Fetching data"}</p>
      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
        <Skeletons></Skeletons>
      </div>
    </>
  );
};

export default GameGrid;
