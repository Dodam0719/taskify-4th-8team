import { useState } from 'react';
import { membersMock } from './membersMock'; // 목업데이터

const baseURL = 'https://sp-taskify-api.vercel.app/4-8';
const endPoint = '/members';

export interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

const useMembers = () => {
  const [members, setMembers] = useState(membersMock); // 목업 데이터로 초기화
  const [loading, setLoading] = useState(false); // 실제 데이터 받아올 때 사용
  const [error, setError] = useState<Error | null>(null); // 실제 데이터 받아올 때 사용

  return { members, loading, error };
};

export default useMembers;
