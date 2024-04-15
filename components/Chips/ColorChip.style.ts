import styled from 'styled-components';

const ColorChipStyle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(${({ color }) => color});

  @media screen and (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export default ColorChipStyle;
