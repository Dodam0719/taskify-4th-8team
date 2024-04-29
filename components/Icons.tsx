import { device } from '@/styles/breakpoints';
import styled from 'styled-components';

export const Add = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Add.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  cursor: pointer;
`;

export const AddImg = styled.img<{ $width: string; $height: string }>`
  background: url('/icons/Add_Img.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
export const Arrow_dropdown = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Arrow_dropdown.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Arrow_forward = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Arrow_forward.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Arrow_backward = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Arrow_backward.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Arrow_forward_disabled = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Arrow_Forward_disabled.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Calendar = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Calendar.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Close = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Close.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Crown = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Crown.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Email = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Email.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const EyeOff = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/EyeOff.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const EyeOn = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/EyeOn.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Facebook = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Facebook.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Instagram = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Instagram.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Kebab = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Kebab.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const Search = styled.div`
  background: url('/icons/Search.svg') no-repeat;
  position: absolute;
  top: 0.7rem;
  left: 1.6rem;

  width: 2.4rem;
  height: 2.4rem;

  @media ${device.mobile} {
    width: 2.2rem;
    height: 2.2rem;
    top: 0.7rem;
    left: 1.2rem;
  }
`;

// export const Search = styled.div<{ $width: string; $height: string }>`
//   background: url('/icons/Search.svg') no-repeat;
//   width: ${({ $width }) => $width};
//   height: ${({ $height }) => $height};
// `;

export const Setting = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Setting.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  cursor: pointer;
`;

export const Unsubscribe = styled.div<{ $width: string; $height: string }>`
  background: url('/icons/Unsubscribe.svg') no-repeat;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
