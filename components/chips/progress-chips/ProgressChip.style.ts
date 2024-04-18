import styled from 'styled-components';

export const ProgressChipStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--violet_100);

  border-radius: 1.1rem;
  list-style: none;
  color: var(--violet_000);

  .point {
    width: 0.6rem;
    height: 0.6rem;
    background-color: var(--violet_000);
    border-radius: 50%;
  }

  @media screen and (max-width: 767px) {
    .text {
      font-size: 1rem;
    }
  }
`;
