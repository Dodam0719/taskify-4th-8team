import * as S from '../../pages/mypage.style';
import Input from '@/components/input/Input';
import { inputProps } from '@/pages/myPage';
import ProfileAddImg from './ProfileAddImg';
import { useState } from 'react';
import axios from 'axios';

const ProfileBox = () => {
  const [nickname, setNickname] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleSave = async () => {
    try {
      if (uploadedImage || nickname) {
        const formData = new FormData();
        formData.append('image', uploadedImage);
        formData.append('nickname', nickname);
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await axios.post('https://sp-taskify-api.vercel.app/4-8/users/me', formData, config);
        console.log('이미지가 성공적으로 서버로 전송되었습니다:', response.data);
      } else {
        console.error('전송할 이미지가 없습니다.');
      }
    } catch (error) {
      console.error('이미지를 서버로 전송하는 중에 오류가 발생했습니다:', error);
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
