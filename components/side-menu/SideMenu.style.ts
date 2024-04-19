import styled from 'styled-components';

export const SideMenuStyle = styled.aside`
  background-color: #fafafa; // 삭제 예정

  width: 30rem;
  height: 100vh;
  padding: 2rem 2.4rem;
  border-right: 1px solid var(--gray_060);

  .logo-container {
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.7rem 0 2.7rem;

    .text {
      color: var(--gray_000);
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    gap: 2.7rem;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 16rem;
  }

  @media screen and (max-width: 767px) {
    width: 6.7rem;
    padding: 0;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text,
    .logo-title,
    .crown-icon {
      display: none;
    }

    .logo-image {
      width: 2.4rem;
      height: 2.7rem;
    }

    .container {
      margin: 3.9rem 0 3.8rem;
    }

    .list-container {
      gap: 3.8rem;
    }
  }
`;
