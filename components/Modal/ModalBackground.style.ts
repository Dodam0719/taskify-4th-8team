import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div<{
  width?: string;
  height?: string;
  tabletWidth?: string;
  tabletHeight?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 0.8rem;
  background: var(--white_100, #fff);

  @media ${device.tablet} {
    width: ${({ tabletWidth }) => tabletWidth};
    height: ${({ tabletHeight }) => tabletHeight};
  }

  @media ${device.mobile} {
    width: ${({ mobileWidth }) => mobileWidth};
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;
