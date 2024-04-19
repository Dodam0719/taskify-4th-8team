import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const CardList = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--gray_080);

  @media ${device.tablet} {
    border-right: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
