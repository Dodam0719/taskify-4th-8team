import { useState } from 'react';
import Button from '../button/Button';
import ColorChips from '../chips/color-chips/ColorChips';
import * as S from './DashboardNewName.style';
import api from '@/pages/api/axios';

interface DashboardNewNameType {
  children: string;
  dashboardId: any;
}

const DashboardNewName = ({ dashboardId, children }: DashboardNewNameType) => {
  const [newName, setNewName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleChangeNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const handelSubmitDashboard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼의 기본 동작인 제출을 막음

    try {
      const response = await api.put(`/dashboards/${dashboardId}`, {
        title: newName,
        color: selectedColor,
      });
      window.location.reload();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <S.DashboardNewNameStyle>
      <form onSubmit={handelSubmitDashboard}>
        <S.DashboardEditTitleContainerStyle>
          <p>{children}</p>
          <ColorChips onColorSelect={handleColorSelect} />
        </S.DashboardEditTitleContainerStyle>
        <S.DashboardEditStyle>
          <label>대시보드이름</label>
          <input type='text' placeholder='이름을 입력해주세요' value={newName} onChange={handleChangeNewName} />
        </S.DashboardEditStyle>
        <S.DashboardEditButtonStyle>
          <Button variant='accept' $width='8.4rem' $height='3.2rem'>
            변경
          </Button>
        </S.DashboardEditButtonStyle>
      </form>
    </S.DashboardNewNameStyle>
  );
};
export default DashboardNewName;
