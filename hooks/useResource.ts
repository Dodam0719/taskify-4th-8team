import { apiCall } from '@/pages/api/api';
import { useCallback, useEffect, useState } from 'react';

interface Resource<T, K, U> {
  data: U;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  createData: (data: K) => Promise<void>;
}

export const useResource = <T, K, U>(endpoint: string): Resource<T, K, U> => {
  // T = 대시보드  K = CREATE_DASHBOARD
  const [data, setData] = useState<U>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result: U = await apiCall('get', endpoint);
      setData(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const createData = useCallback(
    async (newData: K) => {
      setLoading(true);
      try {
        const createdData: T = await apiCall('post', endpoint, newData);
        fetchData();
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
