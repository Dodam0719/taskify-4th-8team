import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const DashboardStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--gray_100);
  @media ${device.tablet} {
    max-height: 100%;
  }
  @media (${device.mobile}) {
    height: 100%;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const WrapperStyle = styled.div`
  width: 100%;
`;

export const NavigationStyle = styled.nav`
  width: 100%;
  height: 7rem;
  background-color: var(--white_100);
`;

export const CardListStyle = styled.article`
  display: flex;
  width: 100%;
  height: auto;
  align-items: stretch;
  > * {
    flex-grow: 1;
  }
  > button {
    width: auto;
  }

  @media ${device.tablet} {
    display: block;
    > :last-child {
      display: none;
    }
  }
`;

export const ButtonStyle = styled.article`
  display: none;
  padding: 6.8rem 2rem 2rem 2rem;
  @media ${device.tablet} {
    display: block;
    padding: 2rem;
  }
`;
