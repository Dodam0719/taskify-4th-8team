import styled from 'styled-components';

export const AddCardButtonStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.4rem;
  height: 4rem;

  border-radius: 6px;
  border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
  background: var(--white-white_FFFFFF, #fff);
  cursor: pointer;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 3.2rem;
  }
`;
