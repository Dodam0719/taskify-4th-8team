import * as S from './TableItem.style';

interface TableHeaderType {
  userProfileColor: string;
  userName: string;
  userFirstName: string;
  className: string;
  title: string;
  email: string;
}

const TableItem = ({ userProfileColor, userName, userFirstName, className, title, email }: TableHeaderType) => {
  return (
    <S.TableSItemStyle className={className} userProfileColor={userProfileColor}>
      {title === '구성원' ? (
        <div className='user-container'>
          <div className='font-Montserrat profile'>{userFirstName}</div>
          <span className='font-16-regular user'>{userName}</span>
        </div>
      ) : (
        <span className='font-16-regular user'>{email}</span>
      )}
      {/* 버튼 컴포넌트로 교체 */}
      <button className='delete-button'>삭제</button>
    </S.TableSItemStyle>
  );
};

export default TableItem;
