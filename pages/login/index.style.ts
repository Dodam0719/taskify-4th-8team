import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  background-color: var(--gray_100);
  width: 100%;
  height: 100vh;

  @media (max-width: 400px) {
    min-width: 400px;
    overflow-x: hidden;
  }
`;
