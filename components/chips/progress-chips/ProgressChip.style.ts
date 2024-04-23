import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const ProgressChip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--violet_100);

  border-radius: 1.1rem;
  list-style: none;
  color: var(--violet_000);
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Point = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  background-color: var(--violet_000);
  border-radius: 50%;
`;
export const Text = styled.span`
  @media ${device.mobile} {
    font-size: 1rem;
  }
  @media (${device.mobileMin}) {
    width: 100%;
  }
`;
