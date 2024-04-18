import styled from 'styled-components';
export const main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.4rem;
  background-color: var(--black_000);
  h1 {
    margin-top: 4.82rem;
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
  &::before {
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
export const Image = styled.img`
  width: 72.2rem;
  height: 42.3rem;
  border-radius: 0.8rem;
`;
export const section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9rem;
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
    margin-top: 10.3rem;
    margin-left: auto;
    grid-area: img;
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
  span {
    color: var(--gray_060);
  }
  img {
    margin-top: 9.7rem;
    margin-left: 10.8rem;
    grid-area: img;
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
  }
  div {
    display: flex;
    column-gap: 3.3rem;
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
    color: var(--white_100);
  }
`;
