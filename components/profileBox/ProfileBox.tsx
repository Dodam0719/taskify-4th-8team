import * as S from '../../pages/mypage.style';
import Input from '@/components/input/Input';
import { inputProps } from '@/pages/myPage';
import ProfileAddImg from './ProfileAddImg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/pages/api/api';
interface profileInfo {
  id?: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

const ProfileBox = () => {
  const [nickname, setNickname] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [profileInfo, setProfileInfo] = useState<any>({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await api.get('/users/me');
        setProfileInfo(response.data);
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchProfileInfo();
  }, []);
  const handleSave = async () => {
    try {
      let config;

      if (uploadedImage || nickname) {
        const userData = {
          profileImageUrl: uploadedImage || profileInfo.profileImageUrl,
          nickname: nickname || profileInfo.nickname,
        };

        config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await axios.put('https://sp-taskify-api.vercel.app/4-8/users/me', userData, config);
      }
    } catch (error) {
      console.error('요청을 서버로 전송하는 중에 오류가 발생했습니다:', error);
    }
  };

  return (
    <S.myPageProfileBox>
      <h2>프로필</h2>
      <S.myPageProfileSection>
        <ProfileAddImg handleImageSelected={setUploadedImage} />
        <S.myPageProfileTextInputBox>
          <Input label='이메일' {...inputProps} type='email' placeholder={profileInfo.email} readOnly />
          <Input
            label='닉네임'
            {...inputProps}
            type='text'
            placeholder={profileInfo.nickname}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </S.myPageProfileTextInputBox>
      </S.myPageProfileSection>
      <S.Button onClick={handleSave}>저장</S.Button>
    </S.myPageProfileBox>
  );
};

export default ProfileBox;
