import NavBar from "./component/NavBar";
import { useState } from "react";
import Genre from "./component/Genre";

function App() {
  const [genre, setGenre] = useState([
    { id: 1, img: "https://picsum.photos/32/", name: "Action" },
    { id: 2, img: "https://picsum.photos/32/", name: "Indie" },
    { id: 3, img: "https://picsum.photos/32/", name: "Adventure" },
    { id: 4, img: "https://picsum.photos/32/", name: "RPG" },
    { id: 5, img: "https://picsum.photos/32/", name: "Strategy" },
    { id: 6, img: "https://picsum.photos/32/", name: "Shooter" },
  ]);

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid">
        <div className="col-2">
          <Genre genres={genre}></Genre>
        </div>
        <div className="col-9"></div>
      </div>
    </>
  );
}

export default App;
