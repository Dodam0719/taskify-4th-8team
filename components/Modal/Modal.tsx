import { useState } from 'react';
import ModalAlert from './ModalAlert';
import ModalButton from './ModalButton';

const handleCommentClick = () => {
  console.log('Comment button clicked');
};

const handleCancelClick = () => {
  console.log('Cancel button clicked');
};

const handleConfirmClick = () => {
  console.log('Confirm button clicked');
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <ModalAlert message='비밀번호가 일치하지 않습니다.' onClose={handleCloseModal} />}
      <ModalButton text='입력' variant='comment' onClick={handleCommentClick} />
      <ModalButton text='취소' variant='cancel' onClick={handleCancelClick} />
      <ModalButton text='확인' variant='confirm' onClick={handleConfirmClick} />
    </>
  );
};

export default Modal;
