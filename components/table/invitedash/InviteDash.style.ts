import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/styles/breakpoints';

export const InviteDashStyle = styled.article`
  width: 102.2rem;
  height: auto;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const InviteDashContainerStyle = styled.section`
  padding: 3.2rem 2.8rem 0;

  @media ${device.mobile} {
    padding: 2.4rem 1.6rem 0;
  }
`;

export const TitleStyle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const SearchFormStyle = styled.form`
  position: relative;
  margin: 2rem 0 2.4rem 0;

  ::placeholder {
    color: var(--gray_020);
  }
`;

export const SearchInputStyle = styled.input`
  width: 100%;
  height: 4rem;

  padding: 0.8rem 1.6rem 0.8rem 4.8rem;

  font-size: 1.6rem;
  font-weight: 400;

  border-radius: 0.6rem;
  border: 1px solid var(--gray_060);
  background: var(--white_100);

  @media ${device.tablet} {
    height: 3.6rem;
  }

  @media ${device.tablet} {
    padding: 0.8rem 1.6rem 0.8rem 4.4rem;
  }
`;

export const SearchInputIconStyle = styled(Image)`
  position: absolute;
  top: 0.8rem;
  left: 1.6rem;

  @media ${device.tablet} {
    width: 2.2rem;
    height: 2.2rem;
    top: 0.7rem;
    left: 1.2rem;
  }
`;

export const ListHeaderStyle = styled.section`
  display: flex;
  color: var(--gray_020);
  padding: 0 6.4rem;

  > :nth-child(2) {
    padding-left: 4rem;
  }
`;

export const ListHeaderItemStyle = styled.section`
  width: 33%;

  font-size: 1.6rem;
  font-weight: 400;

  @media ${device.mobile} {
    display: none;
  }
`;

export const ListStyle = styled.section`
  > :last-child {
    border: none;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const ListMobileStyle = styled.section`
  display: none;
  @media ${device.mobile} {
    display: block;

    > :first-child {
      padding-top: 0;
    }

    > :last-child {
      border: none;
    }
  }
`;
