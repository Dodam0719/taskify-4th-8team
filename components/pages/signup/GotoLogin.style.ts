import styled from 'styled-components';
import Link from 'next/link';

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const StyledLink = styled(Link)`
  color: var(--blue_100);
  text-decoration: underline;
`;
