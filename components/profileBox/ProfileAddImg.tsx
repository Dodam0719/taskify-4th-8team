import * as S from '../../pages/mypage.style';

import React, { useState } from 'react';
import styled from 'styled-components';

const UploadInput = styled.input`
  display: none;
`;

const ProfileAddImg = () => {
  const [image, setImage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <S.myPageProfileImgBox>
        <label htmlFor='uploadInput'>
          {image ? <img className='uploaded-image' src={image} alt='Uploaded' /> : <img src='/icons/Add_Img.svg' alt='이미지 추가' />}
        </label>
      </S.myPageProfileImgBox>
      <UploadInput id='uploadInput' type='file' accept='image/*' onChange={handleImageUpload} />
    </>
  );
};

export default ProfileAddImg;
