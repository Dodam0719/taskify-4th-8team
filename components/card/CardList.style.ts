import styled from 'styled-components';

export const CardListStyle = styled.div`
  padding: 2rem;
  border-right: 1px solid var(--gray_080);

  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .settings-icon {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    border-right: none;
  }
`;
