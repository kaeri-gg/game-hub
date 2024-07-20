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
import { Box, Button, Divider, Flex, Grid, GridItem, Kbd, Show, Text } from '@chakra-ui/react';
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
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer" `,
          lg: `"nav nav" "aside main"  "footer footer"`,
        }}
        gap="2"
        gridTemplateColumns={{
          //base: '250px 2fr', // 0px
          sm: '', // ~480px
          md: '', // ~768px
          lg: '250px 2fr', // ~992px
          xl: '250px 2fr', // ~1280px
          '2xl': '250px 2fr', // ~1536px
        }}
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
          <GridItem area="aside">
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
            </Flex>
          </div>
          <div className="d-flex">
            <GameGrid gameQuery={gameQuery} />
          </div>
        </GridItem>
        <GridItem area="footer" paddingBottom={'20px'}>
          <Divider />
          <Box w="100%" p={4} color={'gray.300'} justifyContent={'center'} display="flex">
            <span>
              <Kbd>ctr</Kbd> + <Kbd>W</Kbd> <Text as="i">If you are not happy with this. o(TヘTo)</Text>
            </span>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
export default App;
