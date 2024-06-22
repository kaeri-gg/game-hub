import { Game } from "../hook/useGame";
import PlatformIcons from "./PlatformIcons";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xx-2">
      <div className="card m-3">
        <img className="card-img-top" src={game.background_image} />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          {/* <p className="card-text"></p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          <PlatformIcons game={game}></PlatformIcons>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
