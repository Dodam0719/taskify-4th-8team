import { useState } from 'react';
import Button from '../button/Button';
import ColorChips from '../chips/color-chips/ColorChips';
import * as S from './DashboardNewName.style';
import api from '@/pages/api/axios';

interface DashboardNewNameType {
  children: string;
}

const DashboardNewName = ({ children }: DashboardNewNameType) => {
  const [newName, setNewName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const checkEmptyName = () => {
    return newName;
  };

  const handleChangeNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleEditDashboard = () => {
    const isFilled = checkEmptyName();

    if (isFilled) {
      const changeDashboard = async (dashboardId: number = 7073, title: string = newName, color: string = selectedColor) => {
        try {
          const response = await api.put(`/dashboard/${dashboardId}`);
          if (response.status === 200) {
            const result = response.data;
            console.log('대시보드를 수정했습니다.');
          }
        } catch (error: any) {
          console.log(error.response.data.message);
        }
      };
    } else {
      alert('대시보드 이름을 입력해주십시오.');
    }
  };

  return (
    <S.DashboardNewNameStyle>
      <form onSubmit={handleEditDashboard}>
        <S.DashboardEditTitleContainerStyle>
          <p>{children}</p>
          <ColorChips onColorSelect={() => {}} />
        </S.DashboardEditTitleContainerStyle>
        <S.DashboardEditStyle>
          <label>대시보드이름</label>
          <input type='text' placeholder='이름을 입력해주세요' onChange={handleChangeNewName} />
        </S.DashboardEditStyle>
        <S.DashboardEditButtonStyle>
          <Button variant='accept' $width='8.4rem' $height='3.2rem' type='submit'>
            변경
          </Button>
        </S.DashboardEditButtonStyle>
      </form>
    </S.DashboardNewNameStyle>
  );
};
export default DashboardNewName;
