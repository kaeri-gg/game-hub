import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import axios, { AxiosRequestConfig, CanceledError } from 'axios';

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]); // generic Type data
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      const fetchData = async () => {
        setLoading(true);
        try {
          // generic fetch
          const response = await apiClient.get<T[]>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
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
            setError('An unknown error occured.');
          }
          setLoading(false);
        }
      };

      fetchData();

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { error, isLoading, data };
};

export default useData;
