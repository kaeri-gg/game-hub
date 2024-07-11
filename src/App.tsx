import NavBar from './component/NavBar';
import { useState } from 'react';
import GenreList from './component/GenreList';
import GameHeading from './component/GameHeading';
import PlatformSelector from './component/PlatformSelector';
import SortSelector from './component/SortSelector';
import GameGrid from './component/GameGrid';
import { Genre } from './hook/useGenre';
import { Platform } from './hook/usePlatform';
import './style.scss';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Sort } from './hook/useSortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortItem: Sort | null;
  searchText: string; //from the SearchInput.tsx
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [pageTitle, setPageTitle] = useState('Games');

  //const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(undefined);
  //const [selectedPlatform, setSelectedPlatform] = useState<Platform>();

  return (
    <>
      <div className="col-12">
        <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => {
              setPageTitle(genre.name);
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </div>
        <div className="col-10">
          <GameHeading name={pageTitle} />
          <div className="d-flex">
            <Flex paddingLeft={2} marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectedPlatform={platform => {
                    setPageTitle(platform.name);
                    setGameQuery({ ...gameQuery, platform });
                  }}
                />
              </Box>
              <SortSelector
                onSelectedSortItem={sortItem => {
                  setPageTitle(sortItem.name);
                  setGameQuery({ ...gameQuery, sortItem });
                }}
              />
              <Button marginLeft={5} variant="link" fontWeight={'normal'} onClick={() => setGameQuery({} as GameQuery)}>
                Reset Filter
              </Button>
            </Flex>
          </div>
          <div className="d-flex">
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
