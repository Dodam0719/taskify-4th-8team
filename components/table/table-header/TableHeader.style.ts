import styled from 'styled-components';

export const TableHeaderStyle = styled.section`
  margin-bottom: 2.4rem;

  .button {
    width: 10.6rem;
    height: 3.2rem;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.7rem;

    .pagination-container {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    .arrow {
      padding: 1.2rem;
      border-radius: 0 0.4rem 0.4rem 0;
      border: 1px solid var(--gray_060);
      background: var(--white_100);
    }

    .arrow-back-page {
      transform: scaleX(-1);
    }
  }

  .list-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .list-name {
      color: var(--gray_020);
    }
    .button {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 2.4rem;

    .title-container {
      margin-bottom: 1.2rem;
    }

    .title {
      font-size: 2rem;
    }

    .pagination-container {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      .page-number {
        font-size: 1.2rem;
      }
    }

    .arrow {
      width: 3.6rem;
      height: 3.6rem;
      padding: 1rem;
    }

    .pagination-container > .button {
      display: none;
    }

    .list-title-container > .button {
      display: block;
    }
  }
`;
