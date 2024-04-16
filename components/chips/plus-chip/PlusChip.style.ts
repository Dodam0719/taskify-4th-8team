import styled from 'styled-components';

export const PlusChipStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: var(--color-violet_8);
  display: flex;
  border-radius: 0.4rem;

  @media screen and (max-width: 767px) {
    width: 2rem;
    height: 2rem;

    .add-image {
      width: 1.45rem;
      height: 1.45rem;
    }
  }
`;
