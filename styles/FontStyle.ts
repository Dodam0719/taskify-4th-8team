import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("/assets/fonts/Pretendard-Regular.woff") format("woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/assets/fonts/Pretendard-Medium.woff") format("woff");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/assets/fonts/Pretendard-SemiBold.woff") format("woff");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/assets/fonts/Pretendard-Bold.woff") format("woff");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Noto Sans";
    src: url("/assets/fonts/NotoSansKR-Medium.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "나눔손글씨 손편지체";
    src: url("/assets/fonts/NanumSonPyeonJiCe.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "나눔명조";
    src: url("/assets/fonts/NanumMyeongjo.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  .font-10-regular {
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .font-10-semiBold {
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .font-12-regular {
    font-family: "Pretendard";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .font-12-medium {
    font-family: "Pretendard";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .font-12-semiBold {
    font-family: "Pretendard";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal; /* 2rem */
  }

  .font-12-bold {
    font-family: "Pretendard";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .font-14-regular {
    font-family: "Pretendard";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal; /* 2.4rem */
  }

  .font-14-medium {
    font-family: "Pretendard";
    font-size: 1.4rem;
ard    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .font-14-semiBold {
    font-family: "Pretendard";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .font-14-bold {
    font-family: "Pretendard";
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .font-16-regular {
    font-family: "Pretendard";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .font-16-medium {
    font-family: "Pretendard";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .font-16-semiBold {
    font-family: "Pretendard";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .font-18-medium {
    font-family: "Pretendard";
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .font-18-semiBold {
    font-family: "Pretendard";
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .font-20-bold {
    font-family: "Pretendard";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .font-24-bold {
    font-family: "Pretendard";
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .font-Montserrat {
    font-family: "Montserrat";
    font-size: 1.6rem;;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default FontStyle;
