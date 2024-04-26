import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const CardTagChipsStyle = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;
