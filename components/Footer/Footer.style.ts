import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--black_000);
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    padding-top: 2.1rem;
  }
`;
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 192rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7rem;

  @media ${device.tablet} {
    padding: 0 2.4rem;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    height: 100%;
  }
`;
export const FooterText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray_020);
  @media ${device.mobile} {
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
  }
`;
export const FooterMidle = styled.div`
  display: flex;
  gap: 3.2rem;
  @media ${device.mobile} {
    margin-bottom: 6.8rem;
  }
`;
export const FooterRight = styled.div`
  display: flex;
  gap: 1.4rem;
  @media ${device.mobile} {
    margin-bottom: 9rem;
  }
`;
export const Image = styled.img`
  width: 2rem;
  height: 2rem;
  @media ${device.mobile} {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
