import styled from 'styled-components';

export const ModalInputTagWrapper = styled.div`
  width: 45rem;
  height: 7.9rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 7.1rem;
  }
`;

export const ModalInputTagLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const ModalInputTagContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  padding: 1.3rem 1.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);
  overflow: hidden;

  @media (max-width: 767px) {
    min-width: 2.87rem;
    height: 4.2rem;
    padding: 1.2rem 1.6rem;
  }
`;

export const TagList = styled.div`
  max-width: 36.8rem;
  display: flex;
  flex-shrink: 1;
  align-items: center;
`;

export const TagStyle = styled.span<{ color: string }>`
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--white_100, #fff);
  background-color: ${({ color }) => `var(${color})`};
  border-radius: 0.4rem;
  margin-right: 0.8rem;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const ModalInputTagInput = styled.input`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  font-size: 1.6rem;

  ::placeholder {
    color: var(--gray_020, #9fa6b2);
    font-size: 1.6rem;
  }

  @media (max-width: 767px) {
    height: 4.2rem;
    font-size: 1.4rem;

    ::placeholder {
      font-size: 1.4rem;
    }
  }
`;

export const ModalInputTagErrorMessage = styled.div`
  height: 1.7rem;
  margin: 0.8rem 1.6rem;
  color: var(--red_100, #d6173a);
  font-size: 1.4rem;
  font-weight: 400;
`;
