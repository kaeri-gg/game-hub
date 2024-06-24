import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  platform: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platform_parent: Platform[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Game[]>("/games", { signal: controller.signal }) //when sending a GET Request to a server, we use angle brackets to provide a generic type argument
      .then((res) => {
        if (res.data) {
          setGames(res.data);
          setLoading(false);
        }
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, errors, isLoading };
};

export default useGame;
