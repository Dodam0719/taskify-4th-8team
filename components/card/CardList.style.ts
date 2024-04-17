import styled from 'styled-components';

export const CardListStyle = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--gray_100);

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .settings-icon {
    cursor: pointer;
  }
`;
