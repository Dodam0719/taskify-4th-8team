import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const DashboardEditStyle = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--gray_100);
`;

export const DashboardWrapperStyle = styled.div`
  width: 100%;
`;

export const DashboardMainStyle = styled.main`
  max-width: 66rem;
  padding: 2rem;
  @media ${device.tablet} {
    max-width: 100%;
  }
`;

export const DashboardBackStyle = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
  div {
    transform: scaleX(-1);
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const DashboardBoardListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
