import styled from 'styled-components';

const DashboardStyle = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    display: block;

    > * {
      border-bottom: 1px solid var(--gray_080);
    }
  }
`;

export default DashboardStyle;
