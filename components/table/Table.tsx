import * as S from './Table.style';
import TableHeader from './table-header/TableHeader';
import TableItem from './table-item/TableItem';

interface TableType {
  title: string;
  userList: string;
}

const USER_PROFILE_COLOR = ['#C4B1A2', '#9DD7ED', '#FDD446', '#FFC85A'];
const USER_FIRST_NAME = ['J', 'K', 'C', 'Y'];
const USER_NAME = ['장만철', '김태순', '최주협', '윤지현'];
const USER_EMAIL = ['codeitA@codeit.com', 'codeitB@codeit.com', 'codeitC@codeit.com', 'codeitD@codeit.com'];

const Table = ({ title, userList }: TableType) => {
  return (
    <S.Table>
      <TableHeader title={title} userList={userList} />
      {title === '구성원'}
      <S.UserList>
        {USER_PROFILE_COLOR.map((user, i) => (
          <TableItem
            className='item'
            userProfileColor={user}
            userName={USER_NAME[i]}
            userFirstName={USER_FIRST_NAME[i]}
            title={title}
            email={USER_EMAIL[i]}
          />
        ))}
      </S.UserList>
    </S.Table>
  );
};

export default Table;
