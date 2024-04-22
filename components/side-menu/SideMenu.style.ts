import { device } from '@/styles/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

export const SideMenu = styled.aside`
  width: 30rem;
  padding: 2rem 2.4rem;
  border-right: 1px solid var(--gray_060);
  font-size: 1.2rem;
  font-weight: 700;
  background-color: var(--white_100);

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 16rem;
  }
  @media ${device.mobile} {
    width: 6.7rem;
    padding: 0;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled(Image)`
  @media ${device.mobile} {
    width: 2.4rem;
    height: 2.7rem;
  }
`;

export const LogoTitle = styled(Image)`
  @media ${device.mobile} {
    display: none;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5.7rem 0 2.7rem;
  @media ${device.mobile} {
    margin: 3.9rem 0 3.8rem;
  }
`;

export const Text = styled.span`
  color: var(--gray_000);
  @media ${device.mobile} {
    display: none;
  }
`;

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  @media ${device.mobile} {
    gap: 3.8rem;
  }
`;
