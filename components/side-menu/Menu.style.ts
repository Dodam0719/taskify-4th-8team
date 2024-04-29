import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

export const Menu = styled.div`
  gap: 0.6rem;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.2rem;
  background-color: ${({ color }) => color};
  border-radius: 0.4rem;
  cursor: pointer;
  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    gap: 0.4rem;
    padding: 1.2rem 0.6rem;
    overflow: hidden;
  }
`;

export const MenuContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    font-size: 1.6rem;
  }
  @media ${device.mobile} {
    gap: 0;
  }
`;

export const Point = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const MenuItemContainerStyle = styled.div`
  @media ${device.tablet} {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const MenuItem = styled.span<any>`
  color: var(--gray_000);

  @media ${device.mobile} {
    display: ${({ $displayStyle }) => $displayStyle};
    margin-left: 1.2rem;
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;

export const CrownIcon = styled(Image)`
  margin-right: 0.6rem;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 1.5rem;
    height: 1.2rem;
  }
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;
