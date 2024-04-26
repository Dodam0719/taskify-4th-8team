import * as S from '../../pages/mypage.style';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UploadInput = styled.input.attrs({ type: 'file', accept: 'image/*' })`
  display: none;
`;

const ProfileAddImg = ({ handleImageSelected }) => {
  const [image, setImage] = useState<string | null>(null);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE1MCwidGVhbUlkIjoiNC04IiwiaWF0IjoxNzE0MTA5NTYyLCJpc3MiOiJzcC10YXNraWZ5In0.dE6h9qvGxT86uyyRPsOutje3j6XvhMM8gDzDLQwdxtY';

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files?.[0] || null;
    if (file) {
      try {
        const formData = new FormData();
        formData.append('profileImage', file);

        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post('https://sp-taskify-api.vercel.app/4-8/users/me/image', formData, config);

        const imageUrl = response.data.imageUrl;
        setImage(imageUrl);
        handleImageSelected(imageUrl);
      } catch (error) {
        console.error('이미지 업로드 중 오류가 발생했습니다:', error);
      }
    }
  };

  return (
    <>
      <S.myPageProfileImgBox>
        <label htmlFor='uploadInput'>
          {image ? <img className='preview-image' src={image} alt='Preview' /> : <img src='/icons/Add_Img.svg' alt='이미지 추가' />}
        </label>
      </S.myPageProfileImgBox>
      <UploadInput id='uploadInput' type='file' accept='image/*' onChange={handleImageChange} />
    </>
  );
};

export default ProfileAddImg;
