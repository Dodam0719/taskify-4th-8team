import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Header = styled.header`
  background-color: var(--black_000);
`;
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

  @media ${device.tablet} {
    padding: 0 2.4rem;
  }

  @media ${device.mobile} {
    height: 6rem;
    padding: 0 2rem;
  }
`;

export const ImageIcon = styled.img`
  width: 2.9rem;
  height: 3.3rem;
  @media ${device.mobile} {
    width: 2.4rem;
    height: 2.7ren;
  }
`;
export const ImageText = styled.img`
  width: 8rem;
  height: 2.2rem;

  @media ${device.mobile} {
    display: none;
  }
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
  color: var(--white_100);
  cursor: pointer;
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3.6rem;
`;
