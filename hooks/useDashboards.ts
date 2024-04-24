import { useCallback, useState } from 'react';
import { createDashboard, fetchDashboards } from '@/pages/api/dashboardsAPI';
import axios from 'axios';

export interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const useDashboards = () => {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 새로운 대시보드 생성
  const addDashboard = useCallback(async (dashboardData: { title: string; color: string }) => {
    setLoading(true);
    try {
      const newDashboard = await createDashboard(dashboardData);
      setDashboards((dashboards) => [...dashboards, newDashboard]);
    } catch (error: unknown) {
      setError(handleError(error));
    } finally {
      setLoading(false);
    }
  }, []);

  // 대시보드 목록 가져오기
  const loadDashboards = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchDashboards();
      setDashboards(data);
    } catch (error: unknown) {
      setError(handleError(error));
    } finally {
      setLoading(false);
    }
  }, []);

  function handleError(error: unknown): string {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message || '네트워크 에러가 발생했습니다.';
    } else if (error instanceof Error) {
      return error.message;
    }
    return '알 수 없는 에러가 발생했습니다.';
  }

  // 새로운 대시보드 생성
  // const addDashboard = useCallback(async (dashboardData: { title: string; color: string }) => {
  //   setLoading(true);
  //   try {
  //     const newDashboard = await createDashboard(dashboardData);
  //     setDashboards((dashboards) => [...dashboards, newDashboard]);
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       const message = error.response?.data.message || '대시보드 만들기에 실패했습니다.';
  //       setError(message);
  //     } else if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError('대시보드를 생성하는데 알 수 없는 오류가 발생했습니다.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // 대시보드 목록 가져오기
  // const loadDashboards = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const data = await fetchDashboards();
  //     setDashboards(data);
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       const message = error.response?.data.message || '대시보드 가져오기에 실패했습니다.';
  //       setError(message);
  //     } else if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError('대시보드를 가져오는데 알 수 없는 오류가 발생했습니다.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  return { dashboards, loading, error, addDashboard, loadDashboards };
};

export default useDashboards;
