import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import Input from '@/components/input/Input';
import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './mypage.style';
import { Arrow_forward, Add } from '@/components/Icons';

const inputProps = {
  gap: '1rem',
  fontSize: '1.8rem',
  fontWeight: '500',
  placeholderFontSize: '1.6rem',
  mobilePlaceholderFontSize: '1.4rem',
  mobileFontSize: '1.6rem',
  height: '4.8rem',
  mobileHeight: '4.2rem',
};

const myPage = () => {
  return (
    <>
      <S.myPage>
        <SideMenu />
        <S.myPagemain>
          <DashboardHeader />
          <S.myPageWrapper>
            <S.myPageTitle>
              <Arrow_forward $width='2rem' $height='2rem' />
              <h1>돌아가기</h1>
            </S.myPageTitle>
            <S.myPageProfileBox>
              <h2>프로필</h2>
              <S.myPageProfileSection>
                <S.myPageProfileImgBox>
                  <Add $width='2rem' $height='2rem' />
                </S.myPageProfileImgBox>
                <S.myPageProfileTextInputBox>
                  <Input label='이메일' {...inputProps} type='email' placeholder='johndoe@gmail.com' />
                  <Input label='닉네임' {...inputProps} type='text' placeholder='배유철' />
                </S.myPageProfileTextInputBox>
              </S.myPageProfileSection>
              <S.Button>저장</S.Button>
            </S.myPageProfileBox>
            <S.myPagePasswordBox>
              <h2>비밀번호 변경</h2>
              <S.myPageProfilePasswordInputBox>
                <Input label='현재 비밀번호' {...inputProps} isShow='' type='password' placeholder='현재 비밀번호 입력' />
                <Input
                  label='새 비밀번호'
                  {...inputProps}
                  isShow=''
                  type='password'
                  placeholder='새 비밀번호 입력'
                  // errorMsg='비밀번호가 일치하지않습니다'
                />
                <Input
                  label='새 비밀번호 확인'
                  {...inputProps}
                  isShow=''
                  type='password'
                  placeholder='새 비밀번호 입력'
                  // errorMsg='비밀번호가 일치하지않습니다'
                />
              </S.myPageProfilePasswordInputBox>
              <S.Button>변경</S.Button>
            </S.myPagePasswordBox>
          </S.myPageWrapper>
        </S.myPagemain>
      </S.myPage>
    </>
  );
};
export default myPage;
