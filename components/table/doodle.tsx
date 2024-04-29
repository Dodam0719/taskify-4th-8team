const getInvitedDashboard = async (dashboardId: number = 7073, page: number = 1, size: number = 10) => {
  const { data } = await api.get(`dashboards/${dashboardId}/invitations`, {
    params: { page, size },
  });
  console.log(data);
  return data;
};

export const dashboardInvite = async (email: string, dashboardId: number) => {
  try {
    const result = await client.post(`dashboards/${dashboardId}/invitations`, {
      email: email,
    });

    if (result.status === 201) {
    }

    return result.data;
  } catch (e: any) {
    console.log(e);
    toast.error(e.response.data.message);
  }
};

export const getMemberList = async (id: string, page?: number | null, size?: number | null) => {
  const { data } = await client.get('members', {
    params: { dashboardId: id, page, size },
  });
  return data;
};
