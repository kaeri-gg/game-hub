import { Game } from "../hook/useGame";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={game.background_image} />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          {/* <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
