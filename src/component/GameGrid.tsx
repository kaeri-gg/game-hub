import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games") //when sending a GET Request to a server, we use angle brackets to provide a generic type argument
      .then((res) => {
        console.log("Full API Response:", res); // Log the full response object
        if (res.data) {
          setGames(res.data.results);
          console.log("API Response:", res.data.results);
        } else {
          console.log("No data in response");
        }
      })
      .catch((err) => {
        setErrors(err.message);
        console.log("Failed to fetch games:", err.message);
      });
  }, []);

  return (
    <>
      {errors && "<span>Error Fetching data.</span>"}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
