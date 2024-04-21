import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const ModalTool = styled.div`
  padding: 0.6rem;
  position: absolute;
  background-color: var(--white_100);
  width: 9.3rem;
  height: 8.2rem;
  z-index: 1;
  border: 0.1rem solid var(--gray_060);
  border-radius: 0.6rem;
  top: 6.4rem;
  right: 8.7rem;
  @media ${device.mobile} {
    width: 8.6rem;
    height: 7.4rem;
    top: 3.4rem;
    right: 5.6rem;
  }
`;
export const Edit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  width: 8.1rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  color: var(--black_050);
  background-color: var(--white_100);
  border: none;
  &:hover {
    background-color: var(--violet_100);
    color: var(--violet_000);
  }
  @media ${device.mobile} {
    font-size: 1.2rem;
    line-height: normal;
    width: 7.4rem;
    height: 3rem;
  }
`;
export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  width: 8.1rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  background-color: var(--white_100);
  color: var(--black_050);
  border: none;

  &:hover {
    background-color: var(--violet_100);
    color: var(--violet_000);
  }
  @media ${device.mobile} {
    font-size: 1.2rem;
    line-height: normal;
    width: 7.4rem;
    height: 3rem;
  }
`;
