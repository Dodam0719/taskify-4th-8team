import axios from 'axios';
import api from './axios';
import { Dashboard } from '@/hooks/useDashboards';

// const dashboardsEndPoint = '/dashboards';
const dashboardsEndPoint = '/dashboards/?navigationMethod=pagination';

interface DashboardData {
  title: string;
  color: string;
}

interface DashboardsResponse extends DashboardData {
  dashboards: Dashboard[];
}

export const createDashboard = async (data: DashboardData): Promise<Dashboard> => {
  try {
    const response = await api.post(dashboardsEndPoint, data);
    return response.data;
  } catch (error) {
    throw new Error('대시보드 만들기에 실패했습니다.');
  }
};

// export const fetchDashboards = async (page: number = 1, size: number = 10): Promise<DashboardsResponse> => {
export const fetchDashboards = async (): Promise<DashboardsResponse> => {
  try {
    // const response = await api.get(`${dashboardsEndPoint}?navigationMethod=infiniteScroll&page=${page}&size=${size}`);
    const response = await api.get(dashboardsEndPoint);
    return response.data;
  } catch (error) {
    throw new Error('대시보드 가져오기에 실패했습니다.');
  }
};
