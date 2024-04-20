import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

interface TableHeaderType {
  userProfileColor: string;
}

export const TableItem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--gray_080);
`;

export const UserContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media ${device.mobile} {
    gap: 0.8rem;
  }
`;

export const Profile = styled.div<TableHeaderType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.8rem;
  height: 3.8rem;
  padding: 0.2rem;
  border-radius: 50%;
  background-color: ${({ userProfileColor }) => userProfileColor};
  color: var(--white_100);
  font-family: 'Montserrat';
  font-size: 1.6rem;
  font-weight: 600;
  @media ${device.mobile} {
    width: 3.4rem;
    height: 3.4rem;
    font-size: 1.4rem;
  }
`;

export const USER = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const DeleteButton = styled.button`
  width: 8.4rem;
  height: 3.2rem;
  @media ${device.mobile} {
    width: 5.2rem;
    height: 2.5rem;
  }
`;
