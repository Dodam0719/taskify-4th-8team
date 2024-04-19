import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

export const Menu = styled.section`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.8rem;
  font-weight: 500;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    gap: 0.4rem;
  }
`;

export const MenuContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    font-size: 1.6rem;
  }
`;

export const Point = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: var(${({ color }) => color});
`;

export const MenuItem = styled.span`
  color: var(--gray_000);
  @media ${device.mobile} {
    display: none;
  }
`;

export const CrownIcon = styled(Image)`
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 1.5rem;
    height: 1.2rem;
  }
`;
