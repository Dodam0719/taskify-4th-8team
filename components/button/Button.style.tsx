import styled, { css } from 'styled-components';

export const commonStyle = css`
  cursor: pointer;
  border: none;
`;

export const BUTTON_COMPONENTS = {
  login: styled.button`
    ${commonStyle};
    width: 520px;
    height: 50px;
    border-radius: 8px;
    padding: 14px, 236px;
    background-color: var(--violet_000);
    color: var(--white_100);
  `,

  signup: styled.button`
    ${commonStyle};
    width: 520px;
    height: 50px;
    border-radius: 8px;
    padding: 14px, 236px;
    background-color: var(--violet_000);
    color: var(--white_100);
  `,

  accept: styled.button`
    ${commonStyle};
    width: 84px;
    height: 32px;
    border-radius: 4px;
    padding: 7px, 29px;
    background-color: var(--violet_000);
    color: var(--white_100);
  `,

  reject: styled.button`
    ${commonStyle};
    width: 84px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--violet_000);
  `,

  delete: styled.button`
    ${commonStyle};
    width: 520px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--violet_000);
  `,

  addColumn: styled.button`
    ${commonStyle};
    width: 354px;
    height: 70px;
    border-radius: 8px;
    border: 1px solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
  `,

  addTodo: styled.button`
    ${commonStyle};
    width: 314px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid var(--gray_060);
  `,

  deleteDashboard: styled.button`
    ${commonStyle};
    width: 320px;
    height: 62px;
    padding: 20px, 95px;
    border-radius: 8px;
    border: 1px solid var(--gray_060);
    background-color: var(--gray_100);
    color: var(--black_050);
  `,

  pagenation: styled.button`
    ${commonStyle};
    widht: 40px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--gray_060)
    background-color: var(--white_100)
  `,

  addDashboard: styled.button`
    ${commonStyle};
    width: 332px;
    height: 70px;
    border-radius: 8px;
    border: 1px solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
  `,

  dashboard: styled.button`
    ${commonStyle};
    width: 332px;
    height: 70px;
    border-radius: 8px;
    border: 1px solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
  `,
};
