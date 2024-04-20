import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

export const TableHeaderStyle = styled.section`
  margin-bottom: 2.4rem;

  .button {
    width: 10.6rem;
    height: 3.2rem;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.7rem;

    .pagination-container {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    .arrow {
      padding: 1.2rem;
      border-radius: 0 0.4rem 0.4rem 0;
      border: 1px solid var(--gray_060);
      background: var(--white_100);
    }

    .arrow-back-page {
      transform: scaleX(-1);
    }
  }

  .list-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .list-name {
      color: var(--gray_020);
    }
    .button {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 2rem;

    .title-container {
      margin-bottom: 1.2rem;
    }

    .title {
      font-size: 2rem;
    }

    .pagination-container {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .page-number {
        font-size: 1.2rem;
      }
    }

    .arrow {
      width: 3.6rem;
      height: 3.6rem;
      padding: 1rem;
    }

    .pagination-container > .button {
      display: none;
    }

    .list-title-container > .button {
      display: block;
    }
  }
`;

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

export const TableHeader = styled.article`
  margin-bottom: 2.4rem;

  @media ${device.mobile} {
    margin-bottom: 2rem;
  }
`;

export const TitleContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.7rem;

  @media ${device.mobile} {
    margin-bottom: 1.2rem;
  }
`;

export const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media ${device.mobile} {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    > .button {
      display: none;
    }
  }
`;

export const PageNumber = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const ArrowBackPage = styled(Image)`
  padding: 1.2rem;
  border-radius: 0 0.4rem 0.4rem 0;
  border: 1px solid var(--gray_060);
  background: var(--white_100);
  transform: scaleX(-1);
  @media ${device.mobile} {
    width: 3.6rem;
    height: 3.6rem;
    padding: 1rem;
  }
`;

export const ArrowNextPage = styled(Image)`
  padding: 1.2rem;
  border-radius: 0 0.4rem 0.4rem 0;
  border: 1px solid var(--gray_060);
  background: var(--white_100);
  @media ${device.mobile} {
    width: 3.6rem;
    height: 3.6rem;
    padding: 1rem;
  }
`;

export const Button = styled.button`
  width: 10.6rem;
  height: 3.2rem;
  @media ${device.mobile} {
    display: none;
  }
`;

export const ListTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileButton = styled.button`
  display: none;
  width: 10.6rem;
  height: 3.2rem;

  @media ${device.mobile} {
    display: block;
  }
`;

export const ListName = styled.p`
  color: var(--gray_020);
  font-size: 1.6rem;
  font-weight: 400;
  @media ${device.mobile} {
  }
`;
