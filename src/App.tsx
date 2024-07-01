import NavBar from "./component/NavBar";
import { useState } from "react";
import GenreList from "./component/GenreList";
import PageTitle from "./component/PageTitle";
import Platforms from "./component/Platforms";
import OrderByRelevance from "./component/OrderByRelevance";
import GameGrid from "./component/GameGrid";
import { Genre } from "./hook/useGenres";
import "./style.scss";

function App() {
  const [pageTitle, setPageTitle] = useState("Games");
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>(
    undefined
  );

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </div>
        <div className="col-10">
          <PageTitle name={pageTitle}></PageTitle>
          <div className="d-flex">
            <Platforms></Platforms>
            <OrderByRelevance></OrderByRelevance>
          </div>
          <div className="d-flex">
            <GameGrid selectedGenre={selectedGenre}></GameGrid>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
