import { useQuery } from '@tanstack/react-query';
import api from '@/pages/api/axios';
import { ResDashboards } from '@/components/side-menu/SideMenu';

const useGetDashboards = () => {
  return useQuery<ResDashboards>({
    queryFn: async () => {
      try {
        const res = await api.get(`/dashboards/?navigationMethod=pagination&cursorId=0&size=1000&page=1`);
        return res.data;
      } catch (e) {}
    },
    queryKey: ['dashboards'],
  });
};

export default useGetDashboards;
