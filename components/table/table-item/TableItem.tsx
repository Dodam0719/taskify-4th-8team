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
      {/* 버튼 컴포넌트로 교체 */}
      <S.DeleteButton>삭제</S.DeleteButton>
    </S.TableItem>
  );
};

export default TableItem;
