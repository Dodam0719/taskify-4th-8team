import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Table = styled.article`
  width: 62rem;
  padding: 2.6rem 2.8rem 2rem;
  border-radius: 0.8rem;
  @media ${device.mobile} {
    width: 100%;
    padding: 2.2rem 2rem 1.6rem;
  }
`;

export const UserList = styled.article`
  > :first-child {
    padding-top: 0;
  }
  > :last-child {
    border: none;
    padding-bottom: 0;
  }
`;
