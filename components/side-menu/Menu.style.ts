import styled from 'styled-components';

export const MenuStyle = styled.article`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  .menu-container {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .point {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: var(${({ color }) => color});
  }

  .menu {
    color: var(--gray_000);
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    gap: 0.4rem;
    .menu {
      font-size: 1.6rem;
    }

    .crown-icon {
      width: 1.5rem;
      height: 1.2rem;
    }
  }

  @media screen and (max-width: 767px) {
    .menu {
      display: none;
    }
  }
`;
