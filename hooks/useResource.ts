import { apiCall } from '@/pages/api/api';
import { useCallback, useState } from 'react';

interface Resource<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  createData: (data: T) => Promise<void>;
}

export const useResource = <T>(endpoint: string): Resource<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result: T[] = await apiCall('get', endpoint);
      setData(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const createData = useCallback(
    async (newData: T) => {
      setLoading(true);
      try {
        const createdData: T = await apiCall('post', endpoint, newData);
        setData((prevData) => [...prevData, createdData]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, loading, error, fetchData, createData };
};
