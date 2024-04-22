import styled from 'styled-components';
import { device } from '../styles/breakpoints';
type InputStyledProps = {
  $error?: boolean;
};
export const myPage = styled.div`
  display: flex;
`;
export const myPagemain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const myPageWrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  @media ${device.mobile} {
    padding-left: 1.2rem;
  }
`;
export const myPageTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 0.6rem;
  h1 {
    color: var(--black_050);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;
export const myPageProfileBox = styled.div`
  width: 62rem;
  height: 35.5rem;
  margin-top: 2.5rem;
  border-radius: 0.8rem;
  background-color: var(--white_100);
  padding: 3.2rem 2.8rem 0;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--black_050);
  }
  @media ${device.tablet} {
    width: 54.4rem;
    height: 35.5rem;
  }
  @media ${device.mobile} {
    width: 28.4rem;
    height: 42.2rem;
    padding: 2.8rem 2rem 2rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

export const myPageProfileSection = styled.div`
  display: flex;
  margin-top: 3.2rem;
  gap: 1.6rem;
  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 2.4rem;
    gap: 2.4rem;
  }
`;
export const myPageProfileTextInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.6rem;
  @media ${device.tablet} {
    width: 29rem;
  }
  @media ${device.mobile} {
    width: 24.4rem;
  }
`;
export const myPageProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.2rem;
  height: 18.2rem;
  background-color: #f5f5f5;
  border-radius: 0.6rem;
  @media ${device.mobile} {
    width: 10rem;
    height: 10rem;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
  margin-left: auto;
  width: 8.4rem;
  height: 3.2rem;
  border: none;
  border-radius: 0.4rem;
  background-color: var(--violet_000);
  font-size: 1.4rem;
  text-align: center;
  font-weight: 500;
  line-height: normal;
  color: var(--white_100);
  @media ${device.mobile} {
    height: 2.8rem;
    font-size: 1.2rem;
    margin-top: 0rem;
  }
`;
export const myPagePasswordBox = styled.div`
  margin-top: 1.2rem;
  width: 62rem;
  height: 45.4rem;
  border-radius: 0.8rem;
  background-color: var(--white_100);
  padding: 3.2rem 2.8rem 0rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--black_050);
    margin-bottom: 3.2rem;
  }
  @media ${device.tablet} {
    width: 54.4rem;
  }
  @media ${device.mobile} {
    width: 28.4rem;
    height: 38.5rem;
    padding: 2.8rem 2rem 2rem;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--black_050);
      margin-bottom: 2.4rem;
    }
  }
`;
