import Button from '../button/Button';
import ColorChips from '../chips/color-chips/ColorChips';
import * as S from './DashboardNewName.style';

interface DashboardNewNameType {
  children: string;
}

const DashboardNewName = ({ children }: DashboardNewNameType) => {
  return (
    <S.DashboardNewNameStyle>
      <S.DashboardEditTitleContainerStyle>
        <p>{children}</p>
        <ColorChips onColorSelect={() => {}} />
      </S.DashboardEditTitleContainerStyle>
      <S.DashboardEditStyle>
        <label>대시보드이름</label>
        <input type='text' placeholder='이름을 입력해주세요' />
      </S.DashboardEditStyle>
      <S.DashboardEditButtonStyle>
        <Button variant='accept' $width='8.4rem' $height='3.2rem'>
          변경
        </Button>
      </S.DashboardEditButtonStyle>
    </S.DashboardNewNameStyle>
  );
};

export default DashboardNewName;
