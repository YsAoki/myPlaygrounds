import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";

export type UseFetch<T> = {
  path: string;
  defaultData: T | null;
  params?: Record<string, any>;
  onSuccess?: (data: T) => void;
  onError?: (err: AxiosError) => void;
};

export const useFetch = <T,>({ path, defaultData, params, onSuccess, onError }: UseFetch<T>) => {
  const [data, setData] = useState<T | null>(defaultData);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(path, { params });
      setData(response.data);
      if (onSuccess) onSuccess(response.data);
    } catch (err) {
      if (onError) onError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [path, params, onSuccess, onError]);

  return { data, fetchData, loading };
};
