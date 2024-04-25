import styled from 'styled-components';
import { device } from '../../styles/breakpoints';
export const DashboardHeader = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 0 8rem 0 4rem;
  background-color: var(--white_100);
  @media ${device.tablet} {
    padding: 0 4rem 0 6.8rem;
  }
  @media ${device.mobile} {
    padding: 0 1.2rem;
  }
`;
export const RecipientName = styled.h1`
  color: var(--black_050);
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  margin-right: auto;
  @media ${device.tablet} {
    display: none;
  }
`;

export const DashboardHeaderWrapper = styled.div<{ isvisible?: string }>`
  display: ${({ isvisible }) => (isvisible === 'true' ? 'flex' : 'none')};
  align-items: center;

  @media ${device.tablet} {
    margin-left: ${({ isvisible }) => (isvisible === 'false' ? '0' : 'auto')};
  }
`;

export const SettingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.8rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray_060);
  background-color: var(--white_100);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  color: var(--gray_000);
  gap: 0.8rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  @media ${device.tablet} {
    width: 8.5rem;
    height: 3.6rem;
    margin-left: auto;
    font-size: 1.4rem;
  }
  @media ${device.mobile} {
    width: 4.9rem;
    height: 3rem;
    margin-left: auto;
    img {
      display: none;
    }
  }
`;
export const InviteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.6rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray_060);
  background-color: var(--white_100);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  color: var(--gray_000);
  gap: 0.8rem;
  margin-left: 1.6rem;
  img {
    width: 2rem;
    height: 2rem;
  }
  @media ${device.tablet} {
    margin-left: 1.2rem;
    width: 10.9rem;
    height: 3.6rem;
    font-size: 1.4rem;
  }
  @media ${device.mobile} {
    width: 7.3rem;
    height: 3rem;
    margin-left: 0.6rem;
    img {
      display: none;
    }
  }
`;

export const ProfileTestWrapper = styled.div`
  display: flex;
  padding-left: 4rem;
  padding-right: 4.2rem;
  border-right: 0.01rem solid var(--gray_060);
  @media ${device.tablet} {
    padding-left: 3.2rem;
    padding-right: 3.4rem;
  }
  @media ${device.mobile} {
    padding-left: 1.6rem;
    padding-right: 2.2rem;
  }
`;
export const TestProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(${({ color }) => color});
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 5rem;
  border: 0.2rem solid var(--white_100);
  margin-right: -1rem;
  font-size: 1.6rem;
  font-family: Montserrat;
  text-align: center;
  color: var(--white_100);
  font-weight: 600;
  @media ${device.tablet} {
    &[class*='profile-item-2'],
    &[class*='profile-item-3'] {
      display: none;
    }
    @media ${device.mobile} {
      width: 3.4rem;
      height: 3.4rem;
    }
  }
`;
export const LastTestProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4d7da;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 5rem;
  border: 0.2rem solid var(--white_100);
  margin-right: -1rem;
  font-size: 1.6rem;
  font-family: Montserrat;
  text-align: center;
  color: #d25b68;
  font-weight: 600;
  @media ${device.mobile} {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
export const ProfileWrapper = styled.div<{ isVisible?: string }>`
  display: flex;
  align-items: center;
  padding-left: 3.2rem;

  @media ${device.tablet} {
    padding-left: 2.4rem;
    margin-left: ${({ isVisible }) => (isVisible === 'false' ? 'auto' : '')};
  }
  @media ${device.mobile} {
    padding-left: 1.2rem;
  }
`;
export const ProfileInitials = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a3c4a2;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 5rem;
  border: 0.2rem solid var(--white_100);
  font-size: 1.6rem;
  font-family: Montserrat;
  text-align: center;
  color: var(--white_100);
  font-weight: 600;
  @media ${device.mobile} {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
export const ProfileName = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--black_050);
  margin-left: 1.2rem;
  @media ${device.mobile} {
    display: none;
  }
`;
