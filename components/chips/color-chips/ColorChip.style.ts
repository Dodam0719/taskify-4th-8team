import styled from 'styled-components';
import { device } from '@/styles/breakpoints';
import Image from 'next/image';

export const ColorChipStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(${({ color }) => color});
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 2.8rem;
    height: 2.8rem;

    .check-image {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export const ColorChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(${({ color }) => color});
  cursor: pointer;

  @media ${device.mobile} {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const CheckImage = styled(Image)`
  @media ${device.mobile} {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
