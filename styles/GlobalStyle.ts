import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
  :root {
    --color-white_FFFFFF: #FFFFFF;

    --color-black-000000: #000000;
    --color-black-171717: #171717;
    --color-black_333236: #333236;
    --color-black_4B4B4B: #4B4B4B;

    --color-gray_787486: #787486;
    --color-gray_9FA6B2: #9FA6B2;
    --color-gray_D9D9D9: #D9D9D9;
    --color-gray_EEEEEE: #EEEEEE;
    --color-gray_FAFAFA: #FAFAFA;

    --color-violet_5534DA: #5534DA;
    --color-violet_8: #F1EFFD; 

    --color-red_D6173A: #D6173A; /* error */
    
    --color-green_7AC555: #7AC555;
    --color-purple_760DDE: #760DDE;
    --color-orange_FFA500: #FFA500;
    --color-blue_76A6EA: #76A5EA;
    --color-pink_E876EA: #E876EA ;

    /* --color-white: #FFF;
    --color-black: #000;
    --color-error: #DC3A3A;
    --color-surface: #F6F8FF; */
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
      font-family: "Pretend" 
  }  
  
  a {
      text-decoration: none;
      color: inherit;
  }
`;

export default GlobalStyle;
