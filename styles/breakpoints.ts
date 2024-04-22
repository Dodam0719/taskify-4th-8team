const size = {
  mobileMin: 375,
  mobileResponsive: 553,
  mobile: 767,
  tabletMin: 768,
  tablet: 1280,
};

const device = {
  mobileMin: `(max-width: ${size.mobileMin}px)`,
  mobileResponsive: `(max-width: 
${size.mobileResponsive}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
  tabletMin: `(min-width: ${size.tabletMin}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
};

export { size, device };
