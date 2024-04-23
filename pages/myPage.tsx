import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './mypage.style';
import { Arrow_forward } from '@/components/Icons';
import ProfileBox from '@/components/profileBox/ProfileBox';
import ProfilePasswordBox from '@/components/profileBox/ProfilePasswordBox';

export const inputProps = {
  gap: '1rem',
  fontSize: '1.8rem',
  fontWeight: '500',
  placeholderfontsize: '1.6rem',
  mobileplaceholderfontsize: '1.4rem',
  mobilefontsize: '1.6rem',
  height: '4.8rem',
  mobileheight: '4.2rem',
};

const myPage = () => {
  return (
    <>
      <S.myPage>
        <SideMenu />
        <S.myPagemain>
          <DashboardHeader isShow='false' />
          <S.myPageWrapper>
            <S.myPageTitle>
              <Arrow_forward $width='2rem' $height='2rem' />
              <h1>돌아가기</h1>
            </S.myPageTitle>
            <ProfileBox />
            <ProfilePasswordBox />
          </S.myPageWrapper>
        </S.myPagemain>
      </S.myPage>
    </>
  );
};
export default myPage;
