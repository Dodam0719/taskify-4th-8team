import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

const customBreakpoints = {
  mobileFix: '554px',
};

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

  @media ${device.mobile} {
    width: ${({ tabletWidth }) => tabletWidth};
    height: ${({ tabletHeight }) => tabletHeight};
  }

  // 4.8rem는 양 옆의 마진, 55.4rem 이상에서는 줄어들지 않음
  @media (max-width: ${customBreakpoints.mobileFix}) {
    min-width: 37.5rem;
    width: calc(100% - 4.8rem);
    max-width: 55.4rem;
  }

  // 37.5rem에서 32.7rem로 고정
  @media ${device.mobileMin} {
    width: 32.7rem;
  }
`;
