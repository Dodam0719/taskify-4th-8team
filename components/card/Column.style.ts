import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

export const CardWrapperStyle = styled.section`
  max-width: 35.4rem;
  min-width: auto;
  height: auto;
  padding: 2rem 2rem;
  border-right: 1px solid var(--gray_080);
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    border: none;
    max-width: 100%;
    border-bottom: 1px solid var(--gray_080);
  }
  @media (${device.mobile}) {
    max-width: 100%;
    height: 100%;
    border-right: none;
    border-bottom: 1px solid var(--gray_080);
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const CardHeaderStyle = styled.article`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  @media (${device.mobile}) {
    margin-bottom: 1.6rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const CardHeaderTitleStyle = styled.div`
  display: flex;
  align-items: center;
  height: 2.2rem;
`;

export const PointStyle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: var(--violet_000);
  border-radius: 50%;
`;

export const TitleStyle = styled.div`
  margin: 0 0.8rem 0 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--black_050);
  @media (${device.mobile}) {
    font-size: 1.6rem;
    font-weight: 700;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const CardListItemStyle = styled.article``;

export const CardImageStyle = styled(Image)`
  margin-bottom: 1.2rem;
  border-radius: 0.4rem;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 9.1rem;
    height: 5.3rem;
    margin: 0;
    margin-right: 2rem;
  }
  @media (${device.mobile}) {
    width: 100%;
    max-height: 100%;
    min-height: 25rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const CardStyle = styled.article`
  margin-top: 1.6rem;
  padding: 2rem;
  background-color: var(--white_100);
  border: 1px solid var(--gray_060);
  border-radius: 0.6rem;
  cursor: pointer;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    display: flex;
  }
  @media (${device.mobile}) {
    padding: 1.2rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const InfoContainerStyle = styled.section`
  width: 100%;
  height: 100%;
`;

export const CardItemTitleStyle = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  @media (${device.mobile}) {
    font-size: 1.4rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const ContainerStyle = styled.div`
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    white-space: nowrap;
  }
`;

export const CardBottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
  }
`;

export const DateStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  > div {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--gray_000);
  }
  @media (${device.mobile}) {
    gap: 0.4rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const ProfileStyle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: #a3c4a2;
  border-radius: 50%;
  color: var(--white_100);
  font-size: 1.2rem;
  font-family: Montserrat;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media (${device.mobile}) {
    gap: 0.4rem;
    width: 2.2rem;
    height: 2.2rem;
  }
  @media (${device.mobile}) {
    gap: 0.4rem;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;
