export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const breakpoints = {
  xs: 400,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1500,
};

export const deviceWidth = {
  xs_down: `(max-width: ${breakpoints.xs - 1}px)`,
  xs_up: `(min-width: ${breakpoints.xs}px)`,
  sm_down: `(max-width: ${breakpoints.sm - 1}px)`,
  sm_up: `(min-width: ${breakpoints.sm}px)`,
  md_down: `(max-width: ${breakpoints.md - 1}px)`,
  md_up: `(min-width: ${breakpoints.md}px)`,
  lg_down: `(max-width: ${breakpoints.lg - 1}px)`,
  lg_up: `(min-width: ${breakpoints.lg}px)`,
  xl_down: `(max-width: ${breakpoints.xl - 1}px)`,
  xl_up: `(min-width: ${breakpoints.xl}px)`,
  xxl_down: `(max-width: ${breakpoints.xs - 1}px)`,
  xxl_up: `(min-width: ${breakpoints.xs}px)`,
};
