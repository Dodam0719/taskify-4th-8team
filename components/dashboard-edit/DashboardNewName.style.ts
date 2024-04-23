import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const DashboardNewNameStyle = styled.article`
  width: 100%;
  height: 25.6rem;
  padding: 2.8rem 2.9rem;
  background-color: var(--white_100);
  border-radius: 0.8rem;
  @media ${device.mobile} {
    padding: 2.5rem 2rem 21rem;
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;

export const DashboardEditTitleContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.4rem;
  font-size: 2rem;
  font-weight: 700;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;

export const DashboardEditStyle = styled.p`
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  input {
    height: 4.8rem;
    margin-bottom: 2.4rem;
    padding: 1.5rem 1.6rem;
    border-radius: 6px;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    font-size: 1.6rem;
    font-weight: 400;
  }
  input:focus {
    outline: 1px solid var(--blue_100);
  }
  button {
    margin-left: 100%;
  }
  @media ${device.mobile} {
    font-size: 1.6rem;
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;

export const DashboardEditButtonStyle = styled.p`
  display: flex;
  justify-content: end;
  @media ${device.mobile} {
    button {
      width: 8.4rem;
    }
  }
  @media ${device.mobileMin} {
    width: 100%;
  }
`;
