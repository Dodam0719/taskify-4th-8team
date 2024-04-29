import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
  :root {
    --white_100: #FFFFFF;

    --black_000: #000000;
    --black_025: #171717;
    --black_050: #333236;
    --black_100: #4B4B4B;

    --gray_000: #787486;
    --gray_020: #9FA6B2;
    --gray_060: #D9D9D9;
    --gray_080: #EEEEEE;
    --gray_100: #FAFAFA;

    --violet_000: #5534DA;
    --violet_100: #F1EFFD; 

    --red_100: #D6173A; /* error */

    --green_100: #7AC555;
    --purple_100: #760DDE;
    --orange_100: #FFA500;
    --blue_100: #76A5EA;
    --pink_100: #E876EA ;

  }

  *, 
  *::after, 
  *::before {
      margin : 0;
      padding: 0;
      box-sizing: border-box;
  }

  html { 
      font-size: 62.5%;
      font-family: "Pretendard" 
  }  
  
  a {
      text-decoration: none;
      color: inherit;
  }

  button {
    font-family: "Pretendard"
  }
`;

export default GlobalStyle;
