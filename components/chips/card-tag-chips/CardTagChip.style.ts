import styled from 'styled-components';

interface CardTagChipStyleProps {
  tagColor: string;
  tagTextColor: string;
}

export const CardTagChipStyle = styled.li<CardTagChipStyleProps>`
  height: 2.2rem;
  padding: 0.4rem 0.6rem;
  background-color: ${({ tagColor }) => tagColor};
  border-radius: 0.4rem;
  list-style: none;
  color: ${({ tagTextColor }) => tagTextColor};

  @media screen and (max-width: 767px) {
    .tag {
      font-size: 1rem;
    }
  }
`;
