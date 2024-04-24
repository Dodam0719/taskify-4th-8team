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
    const response = await api.post(dashboardsEndPoint, data);
    return response.data;
  } catch (error) {
    throw new Error('대시보드 만들기에 실패했습니다.');
  }
};

export const fetchDashboards = async (): Promise<DashboardResponse[]> => {
  try {
    const response = await api.get(dashboardsEndPoint);
    return response.data;
  } catch (error) {
    throw new Error('대시보드 가져오기에 실패했습니다.');
  }
};
