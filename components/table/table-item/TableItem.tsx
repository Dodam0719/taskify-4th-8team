import Button from '@/components/button/Button';
import { TableItemType } from '../type';
import * as S from './TableItem.style';

const TableItem = ({ userProfileColor, userName, userFirstName, title, email }: TableItemType) => {
  return (
    <S.TableItem>
      {title === '구성원' ? (
        <S.UserContainer>
          <S.Profile userProfileColor={userProfileColor}>{userFirstName}</S.Profile>
          <S.USER>{userName}</S.USER>
        </S.UserContainer>
      ) : (
        <S.USER>{email}</S.USER>
      )}
      <Button variant='delete'>삭제</Button>
    </S.TableItem>
  );
};

export default TableItem;
