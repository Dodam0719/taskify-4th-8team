import styled from 'styled-components';

export const CardHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;

  .title-container {
    display: flex;
    align-items: center;

    .point {
      width: 0.8rem;
      height: 0.8rem;
      background-color: var(--violet_000);
      border-radius: 50%;
      color: var(--black_050);
    }

    .card-list-title {
      font-weight: 700;
      margin: 0 1.2rem 0 0.8rem;
    }
  }
`;
