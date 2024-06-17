import NavBar from "./component/NavBar";
import { useState } from "react";
import Genre from "./component/Genre";
import PageTitle from "./component/PageTitle";

function App() {
  const [pageTitle, setPageTitle] = useState("Games");
  const [genre, setGenre] = useState([
    { id: 1, img: "https://picsum.photos/32/", name: "Action", link: "#" },
    { id: 2, img: "https://picsum.photos/32/", name: "Indie", link: "#" },
    { id: 3, img: "https://picsum.photos/32/", name: "Adventure", link: "#" },
    { id: 4, img: "https://picsum.photos/32/", name: "RPG", link: "#" },
    { id: 5, img: "https://picsum.photos/32/", name: "Strategy", link: "#" },
    { id: 6, img: "https://picsum.photos/32/", name: "Shooter", link: "#" },
  ]);

  const visibleGenre = (name: string) => {
    setPageTitle(name);
  };

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid d-flex">
        <div className="col-2">
          <Genre genres={genre} onClick={(name) => visibleGenre(name)}></Genre>
        </div>
        <div className="col-10">
          <PageTitle name={pageTitle}></PageTitle>
        </div>
      </div>
    </>
  );
}
export default App;
