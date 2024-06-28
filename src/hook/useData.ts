import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios, { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]); // generic Type data
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        // generic fetch
        const response = await apiClient.get<T[]>(endpoint, {
          signal: controller.signal,
        });

        if (response.data) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof CanceledError) return;
        if (axios.isCancel(err)) return;
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occured.");
        }
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint]);

  return { error, isLoading, data };
};

export default useData;
