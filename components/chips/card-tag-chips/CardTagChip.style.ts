import styled from 'styled-components';

interface CardTagChipStyleProps {
  tagColor: string; // tagColor prop을 정의
}

const CardTagChipStyle = styled.span<CardTagChipStyleProps>`
  gap: 0.6rem;
  padding: 0.4rem 0.6rem;
  background-color: ${({ tagColor }) => tagColor};
  border-radius: 0.4rem;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export default CardTagChipStyle;
