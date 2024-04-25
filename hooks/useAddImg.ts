import { useState } from 'react';
import axios from 'axios';

export function useFileUpload() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<T>(null);

  const uploadFileWithPut = async (url: string, file: string) => {
    try {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append('file', file);

      // PUT 요청 설정
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      // PUT 요청 보내기
      const response = await axios.put(url, formData, config);
      setResponse(response.data);
      setError(null); // 성공 시 오류 상태 초기화
    } catch (error) {
      setError(error); // 실패 시 오류 상태 설정
      setResponse(null); // 실패 시 응답 상태 초기화
    }
  };

  return { response, error, uploadFileWithPut };
}
