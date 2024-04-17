import { useState } from 'react';
import ModalAlert from './ModalAlert';
import ModalButton from './ModalButton';
import ModalInputComment from './ModalInputComment';
import ModalColumn from './ModalColumn';

const handleCommentClick = () => {
  console.log('Comment button clicked');
};

const handleCancelClick = () => {
  console.log('Cancel button clicked');
};

const handleConfirmClick = () => {
  console.log('Confirm button clicked');
};

const handleNewColumnSubmit = (data: { name: string }) => {
  // 새 컬럼 생성 로직 추가
};

const handleColumnManageSubmit = (data: { name: string }) => {
  // 컬럼 관리 로직 추가
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* {isModalOpen && <ModalAlert message='비밀번호가 일치하지 않습니다.' onClose={handleCloseModal} />} */}
      <ModalButton text='입력' variant='comment' onClick={handleCommentClick} />
      <ModalButton text='취소' variant='cancel' onClick={handleCancelClick} />
      <ModalButton text='확인' variant='confirm' onClick={handleConfirmClick} />
      <ModalInputComment />

      {isModalOpen && (
        <ModalColumn title='새 컬럼 생성' placeholder='새로운 프로젝트' onSubmit={handleNewColumnSubmit} onClose={handleCloseModal} />
      )}
      {/* {isModalOpen && <ModalColumn title='컬럼 관리' placeholder='Done' onSubmit={handleColumnManageSubmit} onClose={handleCloseModal} />} */}
    </>
  );
};

export default Modal;
