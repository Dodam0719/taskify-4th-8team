import { useState } from 'react';
import * as S from './ModalTools.style';
import ModalTodo from './ModalTodo';

const ModalTools = () => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  console.log(isTodoModalOpen);

  const handleNewCardSubmit = (data: { name: string }) => {
    // 할일 생성 생성 로직 추가
  };
  const handleCloseModal = () => {
    setIsTodoModalOpen(false);
    setShowAlert(false);
  };
  const handleEditModal = () => {
    setIsTodoModalOpen(true);
    setShowAlert(true);
    console.log(isTodoModalOpen);
  };
  return (
    <S.ModalTool>
      <S.Edit onClick={handleEditModal}>수정하기</S.Edit>
      {isTodoModalOpen && <ModalTodo todoTitle='할 일 생성' onSubmit={handleNewCardSubmit} onClose={handleCloseModal} />}
      <S.Delete>삭제하기</S.Delete>
    </S.ModalTool>
  );
};
export default ModalTools;
