import styled from 'styled-components';

interface TableHeaderType {
  userProfileColor: string;
}

export const TableSItemStyle = styled.section<TableHeaderType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--gray_080);

  .user-container {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.8rem;
      height: 3.8rem;
      padding: 0.2rem;
      border-radius: 50%;
      background-color: ${({ userProfileColor }) => userProfileColor};
      color: var(--white_100);
    }
  }

  .delete-button {
    width: 8.4rem;
    height: 3.2rem;
  }

  @media screen and (max-width: 767px) {
    .user-container {
      gap: 0.8rem;

      .profile {
        width: 3.4rem;
        height: 3.4rem;
        font-size: 1.4rem;
      }
    }
    .user {
      font-size: 1.4rem;
    }

    .delete-button {
      width: 5.2rem;
      height: 2.5rem;
    }
  }
`;
