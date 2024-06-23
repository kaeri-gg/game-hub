import { Game } from "../hook/useGame";
import CriticScore from "./CriticScore";
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
          <div className="d-flex justify-content-between">
            <div className="col-11">
              <PlatformIcons game={game}></PlatformIcons>
            </div>
            <div className="col-1">
              <CriticScore metric={game.metacritic}></CriticScore>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
