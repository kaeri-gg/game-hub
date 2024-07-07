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

function App() {
  const [pageTitle] = useState('Games');
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(undefined);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>();

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <GenreList selectedGenre={selectedGenre} onSelectGenre={genre => setSelectedGenre(genre)}></GenreList>
        </div>
        <div className="col-10">
          <PageTitle name={pageTitle}></PageTitle>
          <div className="d-flex">
            <PlatformSelector onSelectedPlatform={platform => setSelectedPlatform(platform)}></PlatformSelector>
            <OrderByRelevance></OrderByRelevance>
          </div>
          <div className="d-flex">
            <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
