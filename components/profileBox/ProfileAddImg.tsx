import * as S from '../../pages/mypage.style';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// useFileUpload 훅 import
import { useFileUpload } from '../../hooks/useAddImg'; // useFileUpload 훅의 경로에 맞게 수정하세요.

const UploadInput = styled.input`
  display: none;
`;

const ProfileAddImg = () => {
  const [image, setImage] = useState('');
  const [uploadedImage, setUploadedImage] = useState('');
  const [error, setError] = useState('');

  // useFileUpload 훅 사용
  const { response, error: uploadError, uploadFileWithPut } = useFileUpload();

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files?.[0] || null;

    if (file) {
      // 파일 업로드 훅 호출
      await uploadFileWithPut('https://sp-taskify-api.vercel.app/4-8/users/me/image', file);

      // 파일 업로드 후 응답 및 오류 처리
      if (response) {
        setUploadedImage(response.url);
      }
      if (uploadError) {
        setError('Error uploading image');
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <S.myPageProfileImgBox>
        <label htmlFor='uploadInput'>
          {uploadedImage ? (
            <img className='uploaded-image' src={uploadedImage} alt='Uploaded' />
          ) : image ? (
            <img className='preview-image' src={image} alt='Preview' />
          ) : (
            <img src='/icons/Add_Img.svg' alt='이미지 추가' />
          )}
        </label>
      </S.myPageProfileImgBox>
      <UploadInput id='uploadInput' type='file' accept='image/*' onChange={handleImageUpload} />
    </>
  );
};

export default ProfileAddImg;
