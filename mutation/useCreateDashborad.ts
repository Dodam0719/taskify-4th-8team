import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/pages/api/axios';
import { BaseDashboard } from '@/hooks/useDashboards';
import { ResDashboards } from '@/components/side-menu/SideMenu';

const useCreateMatching = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BaseDashboard) => api.post(`/dashboards`, data),

    onSuccess: async (data) => {
      queryClient.setQueryData(['dashboards'], (prevData: ResDashboards | undefined) => {
        if (prevData) {
          return {
            ...prevData,
            dashboards: [...prevData.dashboards, data],
          };
        }
        return prevData;
      });
      queryClient.invalidateQueries({ queryKey: ['dashboards'] });
    },

    onError: () => {
      console.log('에러용에러');
    },
  });
};

export default useCreateMatching;
