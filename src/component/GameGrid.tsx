import useGame from "../hook/useGame";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && "<span>Error Fetching data.</span>"}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
