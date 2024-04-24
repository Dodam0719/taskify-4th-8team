import axios from 'axios';
import api from './axios';

const dashboardsEndPoint = '/dashboards';

interface DashboardData {
  title: string;
  color: string;
}

interface DashboardResponse extends DashboardData {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export const createDashboard = async (data: DashboardData): Promise<DashboardResponse> => {
  try {
    console.log('Sending data to server:', data);
    const response = await api.post(dashboardsEndPoint, data);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error posting dashboard:', error.response?.data);
      throw new Error(error.response?.data?.message || '대시보드 만들기에 실패했습니다.');
    } else {
      throw new Error('대시보드 만들기에 실패했습니다.');
    }
  }
};

export const fetchDashboards = async (page: number = 1, size: number = 10): Promise<DashboardResponse[]> => {
  try {
    const response = await api.get(`${dashboardsEndPoint}?navigationMethod=infiniteScroll&page=${page}&size=${size}`);
    const dashboards = response.data;
    if (dashboards.length === 0) {
      console.log('조회된 대시보드가 없습니다.');
    }
    console.log('Received dashboards:', dashboards);
    return dashboards;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching dashboards:', error.response?.data);
      throw new Error(error.response?.data?.message || '대시보드 가져오기에 실패했습니다.');
    } else {
      throw new Error('대시보드 가져오기에 실패했습니다.');
    }
  }
};
