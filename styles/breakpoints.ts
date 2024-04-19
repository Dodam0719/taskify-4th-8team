const size = {
  mobile: 767,
  tabletMin: 768,
  tablet: 1280,
};

const device = {
  mobile: `(max-width: ${size.mobile}px)`,
  tabletMin: `(min-width: ${size.tabletMin}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
};

export { size, device };
