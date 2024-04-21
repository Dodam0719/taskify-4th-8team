import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const AddCardButtonStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.4rem;
  height: 4rem;

  border-radius: 0.6rem;
  border: 1px solid var(--gray_060);
  background: var(--white_100);
  cursor: pointer;

  @media screen and (${device.tablet}) and (${device.tabletMin}) {
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 3.2rem;
  }
`;
