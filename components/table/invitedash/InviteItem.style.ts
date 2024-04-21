import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const InviteItemStyle = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: auto;
  padding: 2rem 6.4rem;

  font-size: 1.6rem;
  font-weight: 400;

  border-bottom: 1px solid var(--gray_080);

  @media ${device.tablet} {
    > :nth-child(2) {
      padding-left: 4rem;
    }
  }
`;

export const ItemStyle = styled.span`
  width: 33%;
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonStyle = styled.button`
  width: 8.4rem;
  height: 3.2rem;

  @media ${device.tablet} {
    width: 7.2rem;
    height: 3rem;
  }
`;
