import Image from 'next/image';
import { TableType } from '../type';
import * as S from './TableHeader.style';

const TableHeader = ({ title, userList }: TableType) => {
  return (
    <S.TableHeader>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.PaginationContainer>
          <S.PageNumber>1페이지 중 1</S.PageNumber>
          <div>
            <S.ArrowBackPage src='/icons/Arrow_forward_Disabled.svg' alt='이전 페이지로' width={40} height={40} />
            <S.ArrowNextPage src='/icons/Arrow_forward.svg' alt='다음 페이지로' width={40} height={40} />
          </div>
          {!(title === '구성원') && (
            <S.Button>
              <Image src='/icons/Add_White.svg' alt='초대하기 버튼' width={16} height={16} />
              <span>초대하기</span>
            </S.Button>
          )}
        </S.PaginationContainer>
      </S.TitleContainer>
      <S.ListTitleContainer>
        <S.ListName>{userList}</S.ListName>
        {!(title === '구성원') && (
          <S.MobileButton>
            <Image src='/icons/Add_White.svg' alt='초대하기 버튼' width={16} height={16} />
            <span>초대하기</span>
          </S.MobileButton>
        )}
      </S.ListTitleContainer>
    </S.TableHeader>
  );
};

export default TableHeader;
