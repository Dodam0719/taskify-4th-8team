import styled, { css } from 'styled-components';

export const sizeStyles = {
  addSmall: css`
    width: 8.4rem;
    height: 2.8rem;
  `,
  addLarge: css`
    width: 8.3rem;
    height: 3.2rem;
  `,
  small: css`
    width: 13.8rem;
    height: 4.2rem;
  `,
  large: css`
    width: 12rem;
    height: 4.8rem;
  `,
};

export const variantStyles = {
  comment: css`
    color: var(--violet-violet_5534DA, #5534da);
    background: var(--white-white_FFFFFF, #fff);
    border-radius: 0.4rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    font-size: 1.2rem;
  `,
  cancel: css`
    color: var(--gray-gray_787486, #787486);
    background: var(--white-white_FFFFFF, #fff);
    border-radius: 0.8rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
  `,
  confirm: css`
    color: var(--white-white_FFFFFF, #fff);
    background: var(--violet-violet_5534DA, #5534da);
    border-radius: 0.8rem;
    border: none;
  `,
};

export const ButtonModal = styled.button<{ variant: 'comment' | 'cancel' | 'confirm' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 500;
  cursor: pointer;

  ${({ variant }) => (variant === 'comment' ? sizeStyles.addLarge : sizeStyles.large)}
  ${({ variant }) => variantStyles[variant]}

  @media (max-width: 767px) {
    ${({ variant }) => (variant === 'comment' ? sizeStyles.addSmall : sizeStyles.small)}
  }
`;
