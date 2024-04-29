import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const ModalTask = styled.div`
  padding-left: 2.8rem;
  padding-top: 3.2rem;
  padding-right: 2.8rem;
  position: relative;
  @media ${device.mobile} {
    padding-left: 2rem;
    padding-top: 4rem;
    padding-right: 2rem;
  }
`;
export const ModalTaskHeader = styled.div`
  display: flex;
  h1 {
    margin-right: auto;
    font-size: 2.4rem;
    color: var(--black_050);
    font-weight: 700;
    line-height: normal;
  }
  img {
    width: 2.8rem;
    height: 2.8rem;
    margin-left: 2.4rem;
  }
  @media ${device.mobile} {
    h1 {
      font-size: 2rem;
    }
    .kebob,
    .close {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 1.2rem;
    }
    .kebob {
      right: 5.2rem;
    }
    .close {
      right: 1.2rem;
    }
  }
`;
export const ModalTaskChips = styled.div`
  display: flex;
  padding-top: 2.4rem;
  @media ${device.mobile} {
    padding-top: 2.6rem;
  }
`;

export const ProgressChip = styled.div`
  display: flex;
  width: 6rem;
  height: 2.2rem;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background-color: var(--violet_100);
  border-radius: 1.1rem;
  gap: 0.6rem;
  margin-right: 2rem;
  div {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 1.5rem;
    background-color: var(--violet_000);
  }
  span {
    color: var(--violet_000);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media ${device.mobile} {
    width: 5.5rem;
    height: 2rem;
    span {
      font-size: 1rem;
    }
  }
`;
export const CardChips = styled.div`
  padding-left: 2rem;
  border-left: 0.1rem solid var(--gray_060);
  @media ${device.mobile} {
    padding-left: 1.2rem;
  }
`;
export const ModalTaskText = styled.div`
  padding-top: 1.6rem;
  width: 45rem;
  color: var(--blak_100);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  @media ${device.tablet} {
    width: 42rem;
  }
  @media ${device.mobile} {
    width: 28.7rem;
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`;
export const ModalTaskImg = styled.img`
  padding-top: 1.6rem;
  padding-bottom: 2.4rem;
  width: 45rem;
  height: 26.3rem;
  @media ${device.tablet} {
    width: 42rem;
    height: 24.5rem;
  }
  @media ${device.mobile} {
    width: 28.7rem;
    height: 16.7rem;
    padding-bottom: 1.94rem;
  }
`;
export const ModalTaskComment = styled.div`
  margin-top: 2rem;
  @media ${device.mobile} {
    margin-top: 1.6rem;
  }
`;
export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.4rem;
    height: 3.4rem;
    background-color: #fdd446;
    border-radius: 2rem;
    border: 0.1rem solid var(--white_100);
    color: var(--white_100);
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
  }
  h2 {
    color: var(--black_050);
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 1rem;
  }
  p {
    color: var(--gray_020);
    font-size: 1.2rem;
    font-weight: 400;
    margin-left: 0.8rem;
  }
  @media ${device.mobile} {
    div {
      width: 2.6rem;
      height: 2.6rem;
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.4rem;
      margin-left: 0.8rem;
    }
    p {
      font-size: 1rem;
      margin-left: 0.6rem;
    }
  }
`;
export const Comment = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  margin-left: 4.4rem;
  margin-top: -0.1rem;
  color: var(--black_050);
  @media ${device.mobile} {
    margin-left: 3.4rem;
    font-size: 1.2rem;
  }
`;
export const Edit = styled.div`
  display: flex;
  margin-top: 1.2rem;
  margin-left: 4.4rem;
  gap: 1.2rem;
  p {
    color: var(--gray_020);
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: underline;
  }
  @media ${device.mobile} {
    margin-left: 3.4rem;
    margin-top: 0.8rem;
    gap: 0.8rem;
    p {
      font-size: 1rem;
    }
  }
`;
export const ModalTaskBox = styled.div`
  width: 20rem;
  height: 15.5rem;
  border: 0.1rem solid var(--gray_060);
  background-color: var(--white_100);
  border-radius: 0.8rem;
  padding-left: 1.6rem;
  padding-top: 1.6rem;
  position: absolute;
  right: 2.8rem;
  top: 8.5rem;

  @media ${device.tablet} {
    width: 18rem;
    height: 15.5rem;
  }
  @media ${device.mobile} {
    display: flex;
    position: relative;
    padding-top: 1.2rem;
    width: 28.7rem;
    height: 6.4rem;
    top: 1rem;
    left: 0;
    gap: 6.2rem;
  }
`;
export const ResponsiblePerson = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: var(--black_000);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 0.6rem;
    margin-bottom: 2rem;
  }
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.4rem;
    height: 3.4rem;
    background-color: #a3c4a2;
    border-radius: 2rem;
    border: 0.1rem solid var(--white_100);
    color: var(--white_100);
    font-family: Montserrat;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: var(--black_050);
    font-size: 1.4rem;
    font-weight: 400;
    margin-left: 0.8rem;
  }
  @media ${device.mobile} {
    h3 {
      font-size: 1rem;
      line-height: normal;
    }
    div {
      margin-top: 0.4rem;
      margin-bottom: 0;
    }
    h4 {
      width: 2.6rem;
      height: 2.6rem;
      font-size: 1.2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
export const Deadline = styled.div`
  h3 {
    color: var(--black_000);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2rem;
  }
  p {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
    color: var(--black_050);
  }
  @media ${device.mobile} {
    h3 {
      font-size: 1rem;
      line-height: normal;
    }
    p {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
`;
