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
  return (
    <>
      <ModalButton text='입력' size='addSmall' variant='comment' onClick={handleCommentClick} />
      <ModalButton text='취소' size='large' variant='cancel' onClick={handleCancelClick} />
      <ModalButton text='확인' size='small' variant='confirm' onClick={handleConfirmClick} />
    </>
  );
};

export default Modal;
