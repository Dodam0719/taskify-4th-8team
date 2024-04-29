import { useEffect, useRef, useState } from 'react';
import * as S from './ModalTools.style';
import ModalTodo from './ModalTodo';
import { Column } from '../chips/type';

interface ModalBackgroundProps {
  dashboardId?: any;
  columninfo?: any;
}

const ModalTools = ({ dashboardId, columninfo }: ModalBackgroundProps) => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  const handleNewCardSubmit = (data: { name: string }) => {
    // 할일 생성 생성 로직 추가
  };

  const handleCloseModal = () => {
    setIsTodoModalOpen(false);
  };

  const handleEditModal = () => {
    setIsTodoModalOpen(true);
  };

  return (
    <S.ModalTool>
      <S.Edit onClick={handleEditModal}>수정하기</S.Edit>
      {isTodoModalOpen && (
        <ModalTodo
          dashboardId={dashboardId}
          columninfo={columninfo}
          todoTitle='할 일 수정'
          onSubmit={handleNewCardSubmit}
          onClose={handleCloseModal}
        />
      )}
      <S.Delete>삭제하기</S.Delete>
    </S.ModalTool>
  );
};

export default ModalTools;
