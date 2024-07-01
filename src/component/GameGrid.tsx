import useGame from "../hook/useGame";
import useGenres, { Genre } from "../hook/useGenres";
import GameCard from "./GameCard";
import Skeletons from "./Skeletons";

interface Props {
  selectedGenre?: Genre;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGame({
    genre: selectedGenre?.name,
  });
  const { genres } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <p>{error && "Error Fetching data"}</p>

      <div className="container">
        <div className="row justify-content-md-center d-flex flex-flex-wrap">
          {games.map((game) => (
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
