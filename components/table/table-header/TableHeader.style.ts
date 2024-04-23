import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  width: 10.5rem;
  height: 3.2rem;
  background-color: var(--violet_000);
  border: none;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white_100);
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

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    width: 8.6rem;
    height: 2.8rem;
    background-color: var(--violet_000);
    border: none;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--white_100);
  }
`;

export const ListName = styled.p`
  color: var(--gray_020);
  font-size: 1.6rem;
  font-weight: 400;
`;
