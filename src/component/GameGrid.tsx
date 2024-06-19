import useGame from "../hook/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && "<span>Error Fetching data.</span>"}
      <ul>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
