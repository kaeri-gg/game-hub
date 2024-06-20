import useGame from "../hook/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      <p>{errors && "Error Fetching data"}</p>
      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
