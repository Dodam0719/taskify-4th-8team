import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header``;
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 192rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--black_000);

  @media (max-width: 1280px) {
    padding: 0 2.4rem;
  }

  @media (max-width: 767px) {
    height: 6rem;
    padding: 0 2rem;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: var(--black_000);
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;
export const ImageIcon = styled.img`
  background-color: var(--black_000);
  width: 2.9rem;
  height: 3.3rem;
`;
export const ImageText = styled.img`
  width: 8rem;
  height: 2.2rem;
  background-color: var(--black_000);
`;
export const StyledLink = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--black_000);
  font-size: 1.6rem;
  font-family: pretendard;
  color: var(--white_100);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3.6rem;
`;
