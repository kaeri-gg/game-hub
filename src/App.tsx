import NavBar from './component/NavBar';
import { useState } from 'react';
import GenreList from './component/GenreList';
import PageTitle from './component/PageTitle';
import PlatformSelector from './component/PlatformSelector';
import OrderByRelevance from './component/OrderByRelevance';
import GameGrid from './component/GameGrid';
import { Genre } from './hook/useGenre';
import { Platform } from './hook/usePlatform';
import './style.scss';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [pageTitle] = useState('Games');

  //const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(undefined);
  //const [selectedPlatform, setSelectedPlatform] = useState<Platform>();

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </div>
        <div className="col-10">
          <PageTitle name={pageTitle}></PageTitle>
          <div className="d-flex">
            <PlatformSelector
              onSelectedPlatform={platform => setGameQuery({ ...gameQuery, platform })}
            ></PlatformSelector>
            <OrderByRelevance></OrderByRelevance>
          </div>
          <div className="d-flex">
            <GameGrid gameQuery={gameQuery}></GameGrid>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
