import styled, { css } from 'styled-components';
import { device } from '@/styles/breakpoints';
import { CSSProperties } from 'react';

export const commonStyle = css`
  cursor: pointer;
  border: none;
`;

interface SizeProp {
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
}

export const BUTTON_COMPONENTS = {
  login: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.8rem;
    padding: 1.4rem 23.6rem;
    background-color: ${({ disabled }) => (disabled ? 'var(--gray_020)' : 'var(--violet_000)')};
    color: var(--white_100);
    white-space: nowrap;

    font-size: 1.8rem;
    font-weight: 500;

    @media ${device.mobile} {
      width: 35.1rem;
      padding: 1rem 2rem;
    }
  `,

  signup: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.8rem;
    padding: 1.4rem 23.6rem;
    background-color: ${({ disabled }) => (disabled ? 'var(--gray_020)' : 'var(--violet_000)')};
    color: var(--white_100);
    white-space: nowrap;

    font-size: 1.8rem;
    font-weight: 500;

    @media ${device.mobile} {
      width: 35.1rem;
      padding: 1rem 2rem;
    }
  `,

  accept: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.4rem;
    padding: 0.7rem 2.9rem;
    background-color: var(--violet_000);
    color: var(--white_100);
    white-space: nowrap;

    font-size: 1.4rem;
    font-weight: 500;

    @media ${device.tablet} {
      width: 7.2rem;
      height: 3rem;
      padding: 0.6rem 2.3rem;
    }

    @media ${device.mobile} {
      width: 50%;
      height: 2.8rem;
      padding: 0.7rem 3.7rem;
      font-size: 1.2rem;
    }
  `,

  reject: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.4rem;
    padding: 0.7rem 2.9rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--violet_000);
    white-space: nowrap;

    font-size: 1.4rem;
    font-weight: 500;

    @media ${device.tablet} {
      width: 7.2rem;
      height: 3rem;
      padding: 0.6rem 2.3rem;
    }

    @media ${device.mobile} {
      width: 50%;
      height: 2.8rem;
      padding: 0.7rem 3.7rem;
      font-size: 1.2rem;
    }
  `,

  delete: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.4rem;
    padding: 0.7rem 2.9rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--violet_000);
    white-space: nowrap;

    font-size: 1.4rem;
    font-weight: 500;

    @media ${device.mobile} {
      width: 5.2rem;
      height: 2.8rem;
      padding: 0.7rem 0.9rem;
      font-size: 1.2rem;
    }
  `,

  addColumn: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin: 6.8rem 2rem 2rem 2rem;
    max-width: ${({ $width }) => $width};
    min-width: auto;
    height: ${({ $height }) => $height};
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
    white-space: nowrap;

    font-size: 1.8rem;
    font-weight: 700;

    @media ${device.tablet} {
      max-width: auto;
      min-width: 100%;
      margin: 0;
    }

    @media ${device.mobile} {
      max-width: auto;
      min-width: 100%;
      height: 6rem;
      padding: 2rem 6rem;
      gap: 1.2rem;
      font-size: 1.6rem;
    }
  `,

  addTodo: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    max-width: auto;
    height: ${({ $height }) => $height};
    border-radius: 0.6rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);

    @media ${device.tablet} {
      width: 100%;
    }

    @media ${device.mobile} {
      width: 100%;
      height: 3.2rem;
    }
  `,

  deleteDashboard: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: 2rem 9.5rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--gray_100);
    color: var(--black_050);
    white-space: nowrap;

    font-size: 1.8rem;
    font-weight: 500;

    @media ${device.mobile} {
      width: 28.4rem;
      height: 5.2rem;
      padding: 1.6rem 8.4rem;
      font-size: 1.6rem;
    }
  `,

  pagenation: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.4rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);

    @media ${device.mobile} {
      width: 3.6rem;
      height: 3.6rem;
    }
  `,

  addDashboard: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
    white-space: nowrap;

    font-size: 1.6rem;
    font-weight: 600;

    @media ${device.tablet} {
      width: 24.7rem;
      height: 6.8rem;
    }

    @media ${device.mobile} {
      width: 100%;
      height: 5.8rem;
      font-size: 1.4rem;
    }
  `,

  dashboard: styled.button<SizeProp>`
    ${commonStyle};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.6rem 2rem;
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray_060);
    background-color: var(--white_100);
    color: var(--black_050);
    white-space: nowrap;
    gap: 1rem;

    font-size: 1.6rem;
    font-weight: 600;

    > div {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    @media ${device.tablet} {
      width: 24.7rem;
      height: 6.8rem;
    }

    @media ${device.mobile} {
      width: 26rem;
      height: 5.8rem;
      font-size: 1.4rem;
    }
  `,

  icon: styled.button<SizeProp>`
    ${commonStyle};
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    background: none;
  `,
};
