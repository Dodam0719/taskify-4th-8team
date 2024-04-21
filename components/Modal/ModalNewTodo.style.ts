import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const ModalNewTodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 3.2rem 2.8rem;

  @media ${device.mobileResponsive} {
    margin: 2.8rem 2rem 2rem;
    gap: 2.4rem;
  }
`;

export const ModalNewTodoTitle = styled.p`
  color: var(--black_050, #333236);
  font-size: 2.4rem;
  font-weight: 700;

  @media ${device.mobileResponsive} {
    font-size: 2rem;
  }
`;

export const ModalNewTodoImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ModalNewTodoImageButton {
    padding: 2.4rem;
    border-radius: 6px;
    background: #f5f5f5;

    @media ${device.mobileResponsive} {
      width: 5.8rem;
      height: 5.8rem;
      padding: 1.8rem;
    }
  }
`;

export const ModalNewTodoImageButton = styled.button`
  width: 7.6rem;
  height: 7.6rem;
  padding: 2.4rem;
  border: none;
  border-radius: 6px;
  background-color: #f5f5f5;
  background-image: url(/icons/Add_Chip.svg);
  background-repeat: no-repeat;
  background-size: 2.8rem;
  background-position: center;
  cursor: pointer;

  @media ${device.mobileResponsive} {
    width: 5.8rem;
    height: 5.8rem;
    padding: 1.8rem;
  }
`;

export const ModalNewTodoImageTitle = styled.p`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.mobileResponsive} {
    font-size: 1.6rem;
  }
`;

export const StatusAndManagerWrapper = styled.div`
  width: 32.7rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media ${device.mobileResponsive} {
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.6rem;
    }
  }
`;

export const ModalDeleteColumnFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media ${device.mobileResponsive} {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
