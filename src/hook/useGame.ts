import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Game[]>("/games", { signal: controller.signal }) //when sending a GET Request to a server, we use angle brackets to provide a generic type argument
      .then((res) => {
        console.log("Full API Response:", res); // Log the full response object
        if (res.data) {
          setGames(res.data);
          console.log("API Response:", res.data);
        } else {
          console.log("No data in response");
        }
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        console.log("Failed to fetch games:", err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGame;
