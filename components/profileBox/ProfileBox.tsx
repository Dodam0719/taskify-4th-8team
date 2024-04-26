import * as S from '../../pages/mypage.style';
import Input from '@/components/input/Input';
import { inputProps } from '@/pages/myPage';
import ProfileAddImg from './ProfileAddImg';
import { useState } from 'react';
import axios from 'axios';

const ProfileBox = () => {
  const [nickname, setNickname] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE1MCwidGVhbUlkIjoiNC04IiwiaWF0IjoxNzE0MTA5NTYyLCJpc3MiOiJzcC10YXNraWZ5In0.dE6h9qvGxT86uyyRPsOutje3j6XvhMM8gDzDLQwdxtY';

  const handleSave = async () => {
    try {
      let config;

      if (uploadedImage || nickname) {
        const userData = {
          profileImageUrl: uploadedImage,
          nickname: nickname,
        };

        config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
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
          <Input label='이메일' {...inputProps} type='email' placeholder='johndoe@gmail.com' readOnly />
          <Input
            label='닉네임'
            {...inputProps}
            type='text'
            placeholder='배유철'
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
