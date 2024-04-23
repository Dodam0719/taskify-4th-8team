import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 1%;
`;

export const StyledImage = styled(Image)`
  @media ${device.mobile} {
    widht: 14rem;
    height: 20rem;
  }
`;

export const LogoText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;
