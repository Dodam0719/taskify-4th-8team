import styled from 'styled-components';

const ColorChipStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(${({ color }) => color});
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 2.8rem;
    height: 2.8rem;

    .check-image {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export default ColorChipStyle;
