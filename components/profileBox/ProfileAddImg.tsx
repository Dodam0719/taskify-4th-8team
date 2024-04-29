import * as S from '../../pages/mypage.style';
import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import api from '@/pages/api/api';

const UploadInput = styled.input.attrs({ type: 'file', accept: 'image/*' })`
  display: none;
`;
interface profileInfo {
  id?: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt?: string;
  updatedAt?: string;
}
interface ProfileAddImgProps {
  handleImageSelected: any;
}

const ProfileAddImg = ({ handleImageSelected }: ProfileAddImgProps) => {
  const [image, setImage] = useState('');
  const [profileInfo, setProfileInfo] = useState<any>({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await api.get('/users/me');
        setProfileInfo(response.data);
        setImage(response.data.profileImageUrl); // 이미지가 있을 때 상태 업데이트
      } catch (error) {
        console.error('프로필 정보를 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchProfileInfo();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      axios
        .post('https://sp-taskify-api.vercel.app/4-8/users/me/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          const imageUrl = response.data.profileImageUrl;
          setImage(imageUrl); // 이미지가 업로드되면 상태 업데이트
          handleImageSelected(imageUrl);
        })
        .catch((error) => {
          console.error('이미지 업로드 중 오류가 발생했습니다:', error);
        });
    }
  };
  return (
    <>
      <S.myPageProfileImgBox>
        <label htmlFor='uploadInput'>
          {image ? <img className='preview-image' src={image} alt='Preview' /> : <img src='/icons/Add_Img.svg' alt='Add Image' />}
        </label>
      </S.myPageProfileImgBox>
      <UploadInput id='uploadInput' type='file' accept='image/*' onChange={handleImageChange} />
    </>
  );
};

export default ProfileAddImg;
