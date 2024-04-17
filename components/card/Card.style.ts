import styled from 'styled-components';

export const CardStyle = styled.section`
  width: 31.4rem;
  height: auto;

  padding: 2rem;

  border-radius: 6px;
  border: 1px solid var(--gray_060);
  background: var(--white_100);

  cursor: pointer;

  .card-image {
    margin-bottom: 1.2rem;
  }

  .card-title {
    margin-bottom: 1rem;
  }

  .card-bottom-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    .card-date-container {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      .card-date {
        color: var(--gray_000);
      }
    }
  }

  .card-profile-image {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: #a3c4a2;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 9.3rem;

    .card-image {
      width: 9.1rem;
      height: auto;
    }

    .container {
      width: 100%;

      .card-title {
        width: 100%;
      }

      .info-container {
        width: 100%;
        display: flex;
        white-space: nowrap;
        gap: 1.6rem;

        .card-bottom-container {
          display: flex;
          justify-content: space-between;
          width: 100%;

          margin: 0;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1.2rem;

    .card-image {
      width: 100%;
      height: 100%;
    }

    .card-title {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }

    .card-bottom-container {
      margin-top: 0.6rem;

      .card-date-container {
        gap: 0.4rem;

        .card-calendar-image {
          width: 1.4rem;
          height: 1.4rem;
        }

        .card-date {
          font-size: 1rem;
        }
      }
    }

    .card-profile-image {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
