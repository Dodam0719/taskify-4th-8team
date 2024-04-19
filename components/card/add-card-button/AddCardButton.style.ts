import styled from 'styled-components';

export const AddCardButtonStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.4rem;
  height: 4rem;

  border-radius: 0.6rem;
  border: 1px solid var(--gray_060);
  background: var(--white_100);
  cursor: pointer;

  @media screen and (max-width: 1280px) and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 3.2rem;
  }
`;
