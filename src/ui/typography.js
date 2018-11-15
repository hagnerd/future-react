import Typography from 'typography';
import irvingTheme from 'typography-theme-irving';

/* Override theme colors and stuff here */
irvingTheme.overrideThemeStyles = () => ({
  a: {
    color: '#81A1C4',
  },
  'a:hover': {
    color: '#5E80B0',
  },
  h1: {
    color: '#ECEFF5',
  },
  h2: {
    color: '#8FBCBB',
  },
});

const typography = new Typography(irvingTheme);
export const rhythm = typography.rhythm;

export default typography;
