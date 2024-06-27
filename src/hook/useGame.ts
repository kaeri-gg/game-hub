import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";

export interface Genre {
  id: number;
  img: string;
  name: string;
  link: string;
}
export interface Platform {
  id: number;
  name: string;
  link: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platform_parent: Platform[];
}

export interface Relevance {
  id: number;
  name: string;
  link: string;
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenre] = useState<Genre[]>([]);
  const [relevances, setRelevances] = useState<Relevance[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        // fetching games
        const resGames = await apiClient.get<Game[]>("/games", {
          signal: controller.signal,
        });

        if (resGames.data) {
          setGames(resGames.data);
          setLoading(false);
        }

        // fetching genre
        const resGenre = await apiClient.get<Genre[]>("/genres", {
          signal: controller.signal,
        });

        if (resGenre.data) {
          setGenre(resGenre.data);
          setLoading(false);
        }

        // fetching platforms
        const resPlatform = await apiClient.get<Platform[]>("/platforms", {
          signal: controller.signal,
        });

        if (resPlatform.data) {
          setPlatforms(resPlatform.data);
          setLoading(false);
        }

        // fetching relevances
        const resRelevances = await apiClient.get<Relevance[]>("/relevances", {
          signal: controller.signal,
        });

        if (resRelevances.data) {
          setRelevances(resRelevances.data);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof CanceledError) return;
        if (axios.isCancel(err)) return;
        if (err instanceof Error) {
          setErrors(err.message);
        } else {
          setErrors("An unknown error occured.");
        }
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { games, errors, isLoading, genres, platforms, relevances };
};

export default useGame;
