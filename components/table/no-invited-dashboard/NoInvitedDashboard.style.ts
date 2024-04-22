import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const DashBoardWrapper = styled.main`
  width: 100%;
  padding: 4rem;
  @media ${device.mobile} {
    > button > div {
      width: 2rem;
      height: 2rem;
    }
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const UnsubscribeWrapper = styled.section`
  max-width: 102.2rem;
  width: auto;
  height: 40rem;
  margin-top: 4rem;
  padding: 3.2rem 2.8rem;
  border-radius: 0.8rem;
  background-color: var(--white_100);
  @media ${device.tablet} {
    width: 100%;
    height: 40rem;
  }
`;

export const UnsubscribeTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  @media ${device.mobile} {
    font-size: 2rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const UnsubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  padding: 6.6rem 0 12.8rem;
  @media ${device.mobile} {
    gap: 1.6rem;
    padding-top: 10.5rem;
    > div {
      width: 6rem;
      height: 6rem;
    }
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const UnsubscribeText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--gray_020);
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;
