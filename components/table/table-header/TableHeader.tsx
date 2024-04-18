import Image from 'next/image';
import * as S from './TableHeader.style';

interface TableHeaderType {
  title: string;
  userList: string;
}

const TableHeader = ({ title, userList }: TableHeaderType) => {
  return (
    <S.TableHeaderStyle>
      <div className='title-container'>
        <span className='font-24-bold title'>{title}</span>
        <div className='pagination-container'>
          <span className='font-14-regular page-number'>1페이지 중 1</span>
          <div className='pagination-arrow'>
            <Image className='arrow arrow-back-page' src='/assets/table/arrow_forward.svg' alt='이전 페이지로' width={40} height={40} />
            <Image className='arrow arrow-next-page' src='/assets/table/arrow_forward.svg' alt='다음 페이지로' width={40} height={40} />
          </div>
          {!(title === '구성원') && <button className='button'>초대하기</button>}
        </div>
      </div>
      <div className='list-title-container'>
        <p className='font-16-regular list-name'>{userList}</p>
        {!(title === '구성원') && <button className='button'>초대하기</button>}
      </div>
    </S.TableHeaderStyle>
  );
};

export default TableHeader;
