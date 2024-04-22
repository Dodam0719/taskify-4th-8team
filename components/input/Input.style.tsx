import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

type InputStyledProps = {
  $error?: boolean;
  inputwidth?: string;
  inputheight?: string;
  mobileinputwidth?: string;
  mobileinputheight?: string;
  inputMarginBottom?: string;
  mobileinputMarginBottom?: string;
  placeholderfontSize?: string;
  mobileplaceholderfontSize?: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label<{
  fontweight?: string;
  fontSize?: string;
  LabelMarginBottom?: string;
  mobilefontSize?: string;
  mobileLabelMarginBottom?: string;
}>`
  color: var(--black_050);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontweight }) => fontweight};
  margin-bottom: ${({ LabelMarginBottom }) => LabelMarginBottom};

  @media ${device.mobile} {
    font-size: ${({ mobilefontSize }) => mobilefontSize};
    margin-bottom: ${({ mobileLabelMarginBottom }) => mobileLabelMarginBottom};
  }
`;

export const Input = styled.input<InputStyledProps>`
  width: ${({ inputwidth }) => inputwidth};
  height: ${({ inputheight }) => inputheight};
  padding: 1.3rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $error }) => ($error ? 'var(--red_100)' : 'var(--gray_060)')};
  background-color: var(--white_100);
  margin-bottom: ${({ inputMarginBottom }) => inputMarginBottom};

  &::placeholder {
    color: var(--gray_020);
    font-size: ${({ placeholderfontSize }) => placeholderfontSize};
  }

  &:focus {
    outline: none;
    border: 0.1rem solid var(--violet_000);
  }
  @media ${device.mobile} {
    width: ${({ mobileinputwidth }) => mobileinputwidth};
    height: ${({ mobileinputheight }) => mobileinputheight};
    margin-bottom: ${({ mobileinputMarginBottom }) => mobileinputMarginBottom};
    &::placeholder {
      font-size: ${({ mobileplaceholderfontSize }) => mobileplaceholderfontSize};
      color: var(--gray_020);
    }
  }
`;

export const ImgPosition = styled.div<{ isShow?: string }>`
  display: ${({ isShow }) => (isShow ? '' : 'none')};
  position: absolute;
  bottom: 3rem;
  right: 1rem;
`;

export const ErrorMessage = styled.div`
  color: var(--red_100);
  font-size: 1.4rem;
  font-weight: 400;
`;
