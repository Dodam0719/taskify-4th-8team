import Image from 'next/image';
import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const PlusChipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: var(--violet_100);
  display: flex;
  border-radius: 0.4rem;

  @media ${device.mobile} {
    width: 2rem;
    height: 2rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;

export const AddImage = styled(Image)`
  @media ${device.mobile} {
    width: 1.45rem;
    height: 1.45rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;
