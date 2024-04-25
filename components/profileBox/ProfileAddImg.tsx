import * as S from '../../pages/mypage.style';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const UploadInput = styled.input`
  display: none;
`;

const ProfileAddImg = ({ handleImageSelected }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
        handleImageSelected(imageUrl);
      };
      reader.readAsDataURL(file);
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
