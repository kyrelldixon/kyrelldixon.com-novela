import merge from 'lodash/merge';

import colors from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui/colors';
import tags from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui/tags';

const breakpoints = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
];

const fonts = {
  serif: "'Merriweather', Georgia, Serif",
  sansSerif:
    "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

const colorModeTransition =
  'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)';

const novelaTheme = {
  initialColorMode: 'light',
  useCustomProperties: true,
  colorModeTransition,
  colors,
  fonts,
  breakpoints,
  tags,
};

export default merge(novelaTheme, {
  colors: {
    accent: '#0575e6',
    linearGradient: 'linear-gradient(to right, #0575e6, #021b79)',
    modes: {
      dark: {
        accent: '#65c7f7',
        linearGradient: 'linear-gradient(to right, #0575e6, #65c7f7)'
      }
    }
  }
});
