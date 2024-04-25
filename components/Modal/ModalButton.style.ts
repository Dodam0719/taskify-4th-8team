import styled, { css } from 'styled-components';
import { device } from '@/styles/breakpoints';

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
    color: var(--violet_000, #5534da);
    background: var(--white_100, #fff);
    border-radius: 0.4rem;
    border: 0.1rem solid var(--gray_060, #d9d9d9);
    font-size: 1.2rem;
  `,
  cancel: css`
    color: var(--gray_000, #787486);
    background: var(--white_100, #fff);
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray_060, #d9d9d9);
  `,
  confirm: css`
    color: var(--white_100, #fff);
    background: var(--violet_000, #5534da);
    border-radius: 0.8rem;
    border: none;
  `,
};

export const ButtonModal = styled.button<{ $variant: 'comment' | 'cancel' | 'confirm'; $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: 500;
  cursor: pointer;

  ${({ $variant }) => ($variant === 'comment' ? sizeStyles.addLarge : sizeStyles.large)}
  ${({ $variant }) => variantStyles[$variant]}

  @media ${device.mobile} {
    ${({ $variant }) => ($variant === 'comment' ? sizeStyles.addSmall : sizeStyles.small)}
    ${({ $fullWidth, $variant }) => ($fullWidth && $variant === 'comment' ? sizeStyles.addLarge : sizeStyles.large)};
  }

  @media ${device.mobileResponsive} {
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  }
`;
