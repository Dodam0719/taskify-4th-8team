import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const ModalInputDeadlineWrapper = styled.div`
  min-width: 45rem;
  height: 7.9rem;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  @media ${device.mobileResponsive} {
    min-width: 28.7rem;
    height: 7.1rem;
  }
`;

export const ModalInputTitleLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.mobileResponsive} {
    font-size: 1.6rem;
  }
`;

export const ModalInputTitleInput = styled.input<{ dateselected?: boolean }>`
  width: 100%;
  height: 4.8rem;
  padding: 1.4rem 1.6rem 1.4rem 4.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);
  outline: none;
  font-size: 1.6rem;

  background-image: url(${(props) => (props.dateselected ? '/assets/icon/calendar-today-icon-fill.svg' : '/icons/Calendar.svg')});
  background-size: 1.8rem;
  background-repeat: no-repeat;
  background-position: left 1.6rem center;

  ::placeholder {
    color: var(--gray_020, #9fa6b2);
    font-size: 1.6rem;
  }

  @media ${device.mobileResponsive} {
    height: 4.2rem;
    padding: 1.2rem 1.6rem 1.2rem 4.6rem;
    font-size: 1.4rem;

    ::placeholder {
      font-size: 1.4rem;
    }
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  z-index: 100;

  .react-calendar {
    width: 100%;
    max-width: 45rem;
    border-radius: 0.6rem;
    border: 0.1rem solid var(--gray_060, #d9d9d9);
  }
`;
