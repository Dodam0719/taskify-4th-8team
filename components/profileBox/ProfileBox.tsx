import * as S from '../../pages/mypage.style';
import Input from '@/components/input/Input';
import { inputProps } from '@/pages/myPage';
import ProfileAddImg from './ProfileAddImg';

const ProfileBox = () => {
  return (
    <S.myPageProfileBox>
      <h2>프로필</h2>
      <S.myPageProfileSection>
        <ProfileAddImg />
        <S.myPageProfileTextInputBox>
          <Input label='이메일' {...inputProps} type='email' placeholder='johndoe@gmail.com' readOnly />
          <Input label='닉네임' {...inputProps} type='text' placeholder='배유철' />
        </S.myPageProfileTextInputBox>
      </S.myPageProfileSection>
      <S.Button>저장</S.Button>
    </S.myPageProfileBox>
  );
};
export default ProfileBox;
