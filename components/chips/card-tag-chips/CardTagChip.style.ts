import styled from 'styled-components';
import { device } from '@/styles/breakpoints';
import { CardTagChipType } from '../type';

export const CardTagChip = styled.div<CardTagChipType>`
  height: 2.2rem;
  padding: 0.4rem 0.6rem;
  background-color: ${({ tagColor }) => tagColor};
  border-radius: 0.4rem;
  list-style: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ tagTextColor }) => tagTextColor};
`;

export const Tag = styled.span`
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;
