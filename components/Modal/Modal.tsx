import { useState } from 'react';
import ModalAlert from './ModalAlert';
import ModalButton from './ModalButton';
import ModalInputComment from './ModalInputComment';
import ModalColumn from './ModalColumn';
import ModalNewdash from './ModalNewdash';
import ModalInputTitle from './ModalInputTitle';
import ModalInputDeadline from './ModalInputDeadline';
import ModalDeleteColumn from './ModalDeleteColumn';
import ModalInputProgress from './ModalInputProgress';
import ModalInputTag from './ModalInputTag';
import ModalInputManager from './ModalInputManager';
import ModalTodo from './ModalTodo';
import { ModalTool } from './ModalTools.style';

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

const handleNewCardSubmit = (data: { name: string }) => {
  // 할일 생성 생성 로직 추가
};

const handleColumnManageSubmit = (data: { name: string }) => {
  // 컬럼 관리 로직 추가
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowAlert(false);
  };

  const handleDelete = () => {
    setIsModalOpen(false);
    setShowAlert(true);
  };

  return (
    <>
      {/* {isModalOpen && <ModalAlert message='비밀번호가 일치하지 않습니다.' onClose={handleCloseModal} />} */}
      {/* <ModalButton text='입력' variant='comment' onClick={handleCommentClick} />
      <ModalButton text='취소' variant='cancel' onClick={handleCancelClick} />
      <ModalButton text='확인' variant='confirm' onClick={handleConfirmClick} /> */}
      {/* <ModalInputComment /> */}
      {/* <ModalInputTitle /> */}
      {/* <ModalInputDeadline /> */}
      {/* <ModalInputProgress /> */}
      <ModalInputTag />
      {/* <ModalInputManager /> */}

      {/* {isModalOpen && (
        <ModalColumn title='새 컬럼 생성' placeholder='새로운 프로젝트' onSubmit={handleNewColumnSubmit} onClose={handleCloseModal} />
      )} */}
      {/* {isModalOpen && (
        <ModalColumn
          title='컬럼 관리'
          placeholder='Done'
          onSubmit={handleColumnManageSubmit}
          onClose={handleCloseModal}
          onDelete={handleDelete}
        />
      )} */}
      {/* {isModalOpen && (
        <ModalNewdash title='새로운 대시보드' placeholder='뉴프로젝트' onSubmit={handleNewColumnSubmit} onClose={handleCloseModal} />
      )} */}
      {/* {isModalOpen && <ModalDeleteColumn message='컬럼의 모든 카드가 삭제됩니다.' onClose={handleCloseModal} />} */}
      {/* {isModalOpen && <ModalTodo todoTitle='할 일 생성' onSubmit={handleNewCardSubmit} onClose={handleCloseModal} />} */}
      {isModalOpen && <ModalTodo todoTitle='할 일 수정' onSubmit={handleNewCardSubmit} onClose={handleCloseModal} />}
    </>
  );
};

export default Modal;
