import api from './axios';

export const apiCall = async <T>(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: T): Promise<T> => {
  try {
    const response = await api({
      method: method,
      url: url,
      data: data,
    });
    return response.data;
  } catch (error) {
    throw new Error(`${url} 데이터 가져오기에 실패했습니다.`);
  }
};

export default api;
