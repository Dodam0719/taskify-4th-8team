import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const CardHeader = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: var(--violet_000);
  border-radius: 50%;
  color: var(--black_050);
`;

export const CardListTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 1.2rem 0 0.8rem;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;
