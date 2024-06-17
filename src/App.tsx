import NavBar from "./component/NavBar";
import { useState } from "react";
import Genre from "./component/Genre";
import PageTitle from "./component/PageTitle";
import Platforms from "./component/Platforms";
import OrderByRelevance from "./component/OrderByRelevance";

function App() {
  const [pageTitle, setPageTitle] = useState("Games");
  const [genres, setGenre] = useState([
    { id: 1, img: "https://picsum.photos/32/", name: "Action", link: "#" },
    { id: 2, img: "https://picsum.photos/32/", name: "Indie", link: "#" },
    { id: 3, img: "https://picsum.photos/32/", name: "Adventure", link: "#" },
    { id: 4, img: "https://picsum.photos/32/", name: "RPG", link: "#" },
    { id: 5, img: "https://picsum.photos/32/", name: "Strategy", link: "#" },
    { id: 6, img: "https://picsum.photos/32/", name: "Shooter", link: "#" },
  ]);

  const [platforms, setPlatforms] = useState([
    { id: 1, name: "PC", link: "#" },
    { id: 2, name: "Xbox", link: "#" },
    { id: 3, name: "PlayStation", link: "#" },
    { id: 4, name: "IOS", link: "#" },
    { id: 5, name: "Android", link: "#" },
    { id: 6, name: "Apple Macintosh", link: "#" },
  ]);

  const visibleGenre = (name: string) => {
    setPageTitle(name);
  };

  const [relevances, setRelevances] = useState([
    { id: 1, name: "Relevance", link: "#" },
    { id: 2, name: "Date added", link: "#" },
    { id: 3, name: "Name", link: "#" },
    { id: 4, name: "Release date", link: "#" },
    { id: 5, name: "Popularity", link: "#" },
    { id: 6, name: "Average rating", link: "#" },
  ]);

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <Genre genres={genres} onClick={(name) => visibleGenre(name)}></Genre>
        </div>
        <div className="col-10">
          <PageTitle name={pageTitle}></PageTitle>
          <div className="d-flex">
            <Platforms platforms={platforms}></Platforms>
            <OrderByRelevance relevances={relevances}></OrderByRelevance>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
