import styled from 'styled-components';

export const ProgressChipStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--color-violet_8);

  border-radius: 1.1rem;
  list-style: none;
  color: var(--color-violet_5534DA);

  .point {
    width: 0.6rem;
    height: 0.6rem;
    background-color: var(--color-violet_5534DA);
    border-radius: 50%;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
