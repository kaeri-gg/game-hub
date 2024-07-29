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
import { Box, Button, Code, Divider, Grid, GridItem, Kbd, Show, Wrap, WrapItem } from '@chakra-ui/react';
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
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          gap="2"
          paddingX={{
            base: '1em',
            sm: '2em',
            md: '3em',
            lg: '4em',
            xl: '5em',
            '2xl': '6em',
          }}
        >
          <GridItem area="nav">
            <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" w={'200px'}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={genre => {
                  setPageTitle(genre.name);
                  setGameQuery({ ...gameQuery, genre });
                }}
              />
            </GridItem>
          </Show>

          <GridItem area="main">
            <GameHeading name={pageTitle} />

            <Wrap marginBottom={5} align={'center'}>
              <WrapItem>
                <Box marginRight={5}>
                  <PlatformSelector
                    onSelectedPlatform={platform => {
                      setPageTitle(platform.name);
                      setGameQuery({ ...gameQuery, platform });
                    }}
                  />
                </Box>
              </WrapItem>
              <WrapItem>
                <SortSelector
                  onSelectedSortItem={sortItem => {
                    setPageTitle(sortItem.name);
                    setGameQuery({ ...gameQuery, sortItem });
                  }}
                />
              </WrapItem>
              <WrapItem>
                <Button
                  marginLeft={5}
                  variant="link"
                  fontWeight={'normal'}
                  onClick={() => {
                    setGameQuery({} as GameQuery);
                    setPageTitle('Games');
                  }}
                >
                  Reset Filter
                </Button>
              </WrapItem>
            </Wrap>

            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>

        <Box display={'flex'} w="100%" p={4} color={'gray.300'} justifyContent={'center'} marginTop="auto">
          <Box textAlign={'center'}>
            <Divider />
            <span>
              <Kbd>ctr</Kbd> + <Kbd>W</Kbd> <Code> if you are not happy with this.😭😩😞 </Code>
              <Code>but we made this with ❤️🕹️🎮 🥰</Code>
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default App;
