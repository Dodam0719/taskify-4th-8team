import { useEffect, useState } from 'react';

const useColorFromCSSVariable = (cssVariableName: string) => {
  const [colorCode, setColorCode] = useState('');

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const color = rootStyle.getPropertyValue(cssVariableName);
    setColorCode(color.trim());
  }, [cssVariableName]);

  return colorCode;
};

export default useColorFromCSSVariable;
