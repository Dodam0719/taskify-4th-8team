import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 4%;
`;

export const StyledImage = styled(Image)`
  @media ${device.mobile} {
    width: 12rem;
    height: 16.8rem;
  }
`;

export const LogoText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;
