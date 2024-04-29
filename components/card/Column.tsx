import Image from 'next/image';
import CardTagChips from '../chips/card-tag-chips/CardTagChips';
import * as S from './Column.style';
import NumberChip from '../chips/number-chips/NumberChip';
import { Setting } from '../Icons';

import { useState } from 'react';
import ModalColumn from '../Modal/ModalColumn';

import Card from './Card';
import { Column } from '../chips/type';
interface CardProps {
  dashboardId: string;
  column: Column;
}
const Column = ({ column, dashboardId }: CardProps) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [totalCount, setTotalCount] = useState<any>();

  const handleSettingsModal = () => {
    setIsColumnModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsColumnModalOpen(false);
  };

  const handleTotalCountChange = (data: number) => {
    setTotalCount(data);
  };

  const handleColumnManageSubmit = (data: { name: string }) => {
    // 컬럼 관리 로직 추가
  };

  return (
    <S.CardWrapperStyle>
      <S.CardHeaderStyle>
        <S.CardHeaderTitleStyle>
          <S.PointStyle />
          <S.TitleStyle>{column.title}</S.TitleStyle>
          <NumberChip>{totalCount}</NumberChip>
        </S.CardHeaderTitleStyle>
        {isColumnModalOpen && (
          <ModalColumn
            title='컬럼 관리'
            placeholder='Done'
            onSubmit={handleColumnManageSubmit}
            onClose={handleCloseModal}
            columninfo={column}
            dashboardId={dashboardId}
          />
        )}
        <Setting onClick={handleSettingsModal} $width='2.4rem' $height='2.4rem' />
      </S.CardHeaderStyle>
      <Card onCountChange={handleTotalCountChange} columninfo={column} dashboardId={dashboardId} />
    </S.CardWrapperStyle>
  );
};

export default Column;
