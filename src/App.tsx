import NavBar from "./component/NavBar";
import { useState } from "react";
import Genre from "./component/Genre";

function App() {
  const [genre, setGenre] = useState([
    { id: "1", image: "https://picsum.photos/32/", name: "Action" },
    { id: "2", image: "https://picsum.photos/200/", name: "Indie" },
    { id: "3", image: "https://picsum.photos/200/", name: "Adventure" },
    { id: "4", image: "https://picsum.photos/200/", name: "RPG" },
    { id: "5", image: "https://picsum.photos/200/", name: "Strategy" },
    { id: "6", image: "https://picsum.photos/200/", name: "Shooter" },
  ]);

  return (
    <>
      <div className="col-12">
        <NavBar></NavBar>
      </div>
      <div className="container-fluid">
        <div className="col-2">
          <Genre></Genre>
        </div>
        <div className="col-9"></div>
      </div>
    </>
  );
}

export default App;
