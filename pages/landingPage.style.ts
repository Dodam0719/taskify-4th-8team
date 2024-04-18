import styled from 'styled-components';
import { device } from '../styles/breakpoints';

export const main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.4rem;
  background-color: var(--black_000);
  h1 {
    margin-top: 4.82rem;
    text-align: center;
    font-family: pretendard;
    font-size: 7.6rem;
    font-weight: 700;
    line-height: 10rem;
    color: var(--white_100);
    letter-spacing: -2px;
  }
  span {
    margin-left: 2.8rem;
    font-family: Montserrat;
    font-size: 9rem;
    font-weight: 700;
    line-height: 6.5rem;
    color: var(--violet_000);
    letter-spacing: -2px;
  }
  p {
    margin-top: 2.4rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--white_100);
  }
  button {
    margin-top: 6.6rem;
    margin-bottom: 18.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28rem;
    padding: 1.5rem 0 1.4rem;
    border-radius: 0.8rem;
    background-color: var(--violet_000);
    color: var(--white_100);
    font-size: 1.8rem;
    font-weight: 500;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 5.6rem;
    }
    span {
      margin-left: 2.4rem;
      font-size: 7rem;
    }
    p {
      font-size: 1.6rem;
    }
    button {
      padding: 1.5rem 0 1.6rem;
      font-size: 1.6rem;
    }
    @media ${device.mobile} {
      h1 {
        font-size: 4rem;
        white-space: pre-line;
        word-wrap: break-word;
        line-height: normal;
      }
      span {
        display: block;
        margin-left: auto;
        font-size: 4.2rem;
      }
      p {
        margin-top: 1.8rem;
        font-size: 1.2rem;
      }
      button {
        margin-top: 7rem;
        width: 23.5rem;
        padding: 1.3rem 0 1.2rem;
        font-size: 1.4rem;
      }
    }
  }
`;
export const Image = styled.img`
  width: 72.2rem;
  height: 42.3rem;
  border-radius: 0.8rem;
  @media ${device.tablet} {
    width: 53.7rem;
    height: 31.4rem;
  }
  @media ${device.tablet} {
    width: 28.7rem;
    height: 16.8rem;
  }
`;
export const section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 9rem;
  background-color: var(--black_000);
  @media ${device.mobile} {
    padding-bottom: 5.9rem;
  }
`;

export const sectionWrapper1 = styled.div`
  width: 120rem;
  height: 60rem;
  border-radius: 0.8rem;
  background-color: var(--black_100);
  display: grid;
  grid-template:
    '. . .'
    'p . img'
    'h2 . img'
    '. . img';
  p {
    margin-top: 12.3rem;
    margin-left: 6rem;
    grid-area: p;
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--gray_020);
  }
  h2 {
    margin-top: 10rem;
    margin-left: 6rem;
    font-family: pretendard;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.4rem;
    color: var(--white_100);
    grid-area: h2;
  }
  span {
    color: var(--gray_060);
  }
  img {
    width: 59.4rem;
    height: 49.7rem;
    margin-top: 10.3rem;
    border-radius: 0.8rem;
    margin-left: auto;
    grid-area: img;
  }
  @media ${device.tablet} {
    width: 66.4rem;
    height: 97.2rem;
    border-radius: 0.8rem;
    grid-template:
      'p p p'
      'h2 h2 h2'
      'img img img';
    p {
      margin-top: 6.3rem;
    }
    span {
      color: var(--white_100);
    }
    img {
      margin-top: 22rem;
      width: 51.9rem;
      height: 43.2rem;
    }
  }
  @media ${device.mobile} {
    width: 34.3rem;
    height: 68.6rem;
    align-items: center;
    p {
      margin-top: 6rem;
      margin-left: 0;
      text-align: center;
      font-size: 1.8rem;
    }
    h2 {
      margin-left: 0;
      margin-top: 6.1rem;
      text-align: center;
      font-size: 3.6rem;
      line-height: 5rem;
    }
    img {
      margin-top: 19.4rem;
      width: 29.6rem;
      height: 24.8rem;
    }
  }
`;
export const sectionWrapper2 = styled.div`
  width: 120rem;
  height: 60rem;
  border-radius: 0.8rem;
  background-color: var(--black_100);
  display: grid;
  grid-template:
    '. . .'
    'img p .'
    'img h2 .'
    'img . .';
  p {
    margin-top: 12.3rem;

    grid-area: p;
    font-size: 2.2rem;
    font-weight: 500;
    color: var(--gray_020);
  }
  h2 {
    margin-top: 10rem;

    font-family: pretendard;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.4rem;
    color: var(--white_100);
    grid-area: h2;
  }
  img {
    margin-top: 9.7rem;
    margin-left: 10.8rem;
    width: 43.6rem;
    height: 50.2rem;
    grid-area: img;
  }
  @media ${device.tablet} {
    width: 66.4rem;
    height: 97.2rem;
    border-radius: 0.8rem;
    grid-template:
      'p p p'
      'h2 h2 h2'
      'img img img';
    p {
      margin-top: 6.3rem;
      margin-left: 6rem;
    }
    h2 {
      margin-left: 6rem;
    }
    img {
      margin-top: 24rem;
      margin-left: 15.2rem;
      width: 36rem;
      height: 41.2rem;
    }
  }
  @media ${device.mobile} {
    width: 34.3rem;
    height: 68.6rem;
    align-items: center;
    p {
      margin-top: 6rem;
      margin-left: 0;
      text-align: center;
      font-size: 1.8rem;
    }
    h2 {
      margin-left: 0;
      margin-top: 6.1rem;
      text-align: center;
      font-size: 3.6rem;
      line-height: 5rem;
    }
    img {
      margin-top: 19.2rem;
      margin-left: 6.3rem;
      width: 21.7rem;
      height: 24.8rem;
    }
  }
`;
export const sectionWrapper3 = styled.div`
  width: 120rem;

  h3 {
    font-family: Pretendard;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--white_100);
    margin-bottom: 3.6rem;
    letter-spacing: -0.21rem;
  }
  div {
    display: flex;
    column-gap: 3.3rem;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-align: center;
    }
    div {
      flex-direction: column;
    }
  }
  @media ${device.mobile} {
    font-size: 2.2rem;
  }
`;
export const sectionBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const imageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.8rem;
  height: 26rem;
  background-color: var(--black_100);
  border-radius: 0.8rem 0.8rem 0 0;
  @media ${device.mobile} {
    width: 34.3rem;
    height: 23.5rem;
  }
`;
export const textBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.8rem;
  height: 12.4rem;
  padding-left: 3.2rem;
  padding-top: 3.3rem;
  background-color: var(--black_025);
  border-radius: 0 0 0.8rem 0.8rem;
  h4 {
    font-family: pretendard;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--white_100);
    margin-bottom: 1.8rem;
  }
  p {
    font-family: pretendard;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    color: var(--white_100);
  }
  @media ${device.tablet} {
    margin-bottom: 4.8rem;
  }
  @media ${device.mobile} {
    padding-top: 2.7rem;
    width: 34.3rem;
    height: 11.2rem;
    margin-bottom: 0;
    p {
      letter-spacing: -0.14rem;
    }
  }
`;
