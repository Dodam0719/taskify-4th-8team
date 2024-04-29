import * as S from './ModalTodo.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import ModalInputTitle from './ModalInputTitle';
import ModalInputProgress from './ModalInputProgress';
import ModalInputManager from './ModalInputManager';
import ModalInputDeadline from './ModalInputDeadline';
import ModalInputTag from './ModalInputTag';
import { useState } from 'react';
import api from '@/pages/api/api';
import { Column, Columninfo } from '../chips/type';
import axios from 'axios';
import styled from 'styled-components';
const UploadInput = styled.input.attrs({ type: 'file', accept: 'image/*' })`
  display: none;
`;
interface ModalTodoProps {
  todoTitle: string;
  onSubmit: (data: { name: string }) => void;
  onClose: () => void;
  dashboardId: string;
  columninfo: Column;
}

const ModalTodo: React.FC<ModalTodoProps> = ({ onClose, todoTitle, dashboardId, columninfo }) => {
  const [selectedMember, setSelectedMember] = useState<any>('');
  const [deadline, setDeadLine] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>('');

  const handleSelectedMemberChange = (selectedMember: any) => {
    setSelectedMember(selectedMember);
  };
  const handleDeadlineChange = (data: string) => {
    setDeadLine(data);
  };
  const handleTitleChange = (data: string) => {
    setTitle(data);
  };
  const handleDescriptionChange = (data: string) => {
    setDescription(data);
  };
  const handleTagnChange = (title: string[]) => {
    setTags(title);
  };
  const handlesSubmitColumn = async () => {
    const assigneeUserId = selectedMember.userId;
    const dashboardIdAsNumber = parseInt(dashboardId);
    try {
      const requestBody: any = {
        assigneeUserId: assigneeUserId,
        dashboardId: dashboardIdAsNumber,
        columnId: columninfo.id,
        title: title,
        description: description,
        dueDate: deadline,
        tags: tags,
      };
      if (image) {
        requestBody.imageUrl = image;
      }

      const response = await api.post('/cards', requestBody);
    } catch (error) {}
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      axios
        .post(`https://sp-taskify-api.vercel.app/4-8/columns/${columninfo.id}/card-image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          const imageUrl = response.data.imageUrl;
          setImage(imageUrl); // 이미지가 업로드되면 상태 업데이트
        })
        .catch((error) => {
          console.error('이미지 업로드 중 오류가 발생했습니다:', error);
        });
    }
  };
  return (
    <ModalBackground onClose={onClose} width='50.6rem' height='90.7rem' mobileWidth='32.7rem' mobileHeight='86.9rem'>
      <S.ModalTodoWrapper>
        <S.ModalTodoTitle>{todoTitle}</S.ModalTodoTitle>
        <S.StatusAndManagerWrapper>
          {todoTitle === '할 일 수정' && <ModalInputProgress columninfo={columninfo} dashboardId={dashboardId} />}
          <ModalInputManager onSelectedMemberChange={handleSelectedMemberChange} dashboardId={dashboardId} />
        </S.StatusAndManagerWrapper>
        <ModalInputTitle onTitleChange={handleTitleChange} title='제목' />
        <ModalInputTitle onDescriptionChange={handleDescriptionChange} title='설명' height='9.6rem' isTextarea={true} />
        <ModalInputDeadline onDeadlineChange={handleDeadlineChange} />
        <ModalInputTag onTagChange={handleTagnChange} />
        <S.ModalTodoImageWrapper>
          <S.ModalTodoImageTitle>이미지</S.ModalTodoImageTitle>
          <S.ModalTodoImageButton>
            <label htmlFor='uploadInput'>
              {image ? <img className='preview-image' src={image} alt='Preview' /> : <img src='/icons/Add_Img.svg' alt='Add Image' />}
            </label>
          </S.ModalTodoImageButton>
          <UploadInput id='uploadInput' type='file' accept='image/*' onChange={handleImageChange} />
        </S.ModalTodoImageWrapper>
        <S.ModalTodoButtonWrapper>
          <ModalButton text='취소' variant='cancel' fullWidth={true} onClick={onClose} />
          <ModalButton text='생성' variant='confirm' onClick={handlesSubmitColumn} fullWidth={true} />
        </S.ModalTodoButtonWrapper>
      </S.ModalTodoWrapper>
    </ModalBackground>
  );
};

export default ModalTodo;
