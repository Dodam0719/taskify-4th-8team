import styled from 'styled-components';

export const TableStyle = styled.article`
  width: 62rem;
  background-color: #fafafa;
  padding: 2.6rem 2.8rem 2rem;
  border-radius: 0.8rem;

  .item:first-of-type {
    padding-top: 0;
  }

  .item:last-of-type {
    border: none;
    padding-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 2.2rem 2rem 1.6rem;
  }
`;
