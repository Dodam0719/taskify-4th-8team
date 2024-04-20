import Image from 'next/image';
import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const Card = styled.section`
  width: 31.4rem;
  height: auto;
  padding: 2rem;
  border-radius: 0.6rem;
  border: 1px solid var(--gray_060);
  background: var(--white_100);
  cursor: pointer;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 9.3rem;
  }
  @media ${device.mobile} {
    width: 100%;
    padding: 1.2rem;
  }
`;

export const CardImage = styled(Image)`
  margin-bottom: 1.2rem;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 9.1rem;
    height: auto;
    margin: 0;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.section`
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 100%;
  }
`;

export const CardTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 100%;
  }
  @media ${device.mobile} {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
`;

export const InfoContainer = styled.section`
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 100%;
    display: flex;
    white-space: nowrap;
    gap: 1.6rem;
  }
`;

export const CardBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  @media ${device.mobile} {
    margin-top: 0.6rem;
  }
`;

export const CardDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const CalendarImage = styled(Image)`
  @media ${device.mobile} {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const CardDate = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const CardProfileImage = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: #a3c4a2;

  @media ${device.mobile} {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
