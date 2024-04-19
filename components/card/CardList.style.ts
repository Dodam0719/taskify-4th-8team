import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const CardListStyle = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--gray_080);

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .settings-icon {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    border-right: none;
  }
`;

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
