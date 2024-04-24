import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  background-color: var(--gray_100);
  width: 100%;
  min-height: 100vh;
  padding-top: 2rem;

  @media (max-width: 375px) {
    min-width: 375px;
    overflow-x: hidden;
  }
`;
