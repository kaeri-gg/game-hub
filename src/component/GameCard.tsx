import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hook/useGame';
import CriticScore from './CriticScore';
import PlatformIcons from './PlatformIcons';

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <div className="d-flex justify-content-between">
            <div className="col-11">
              <PlatformIcons game={game}></PlatformIcons>
            </div>
            <div className="col-1">
              <CriticScore metric={game.metacritic}></CriticScore>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
