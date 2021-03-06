import { configure, addParameters, addDecorator } from '@storybook/react';
import { dark_theme } from './theme';
import { withInfo } from '@storybook/addon-info';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/index.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withInfo({
    styles: {
      button: {
        base: {
          fontFamily: 'sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          display: 'block',
          position: 'fixed',
          border: 'none',
          background: '#000',
          color: '#fff',
          padding: '5px 15px',
          cursor: 'pointer',
        },
        topRight: {
          bottom: 0,
          right: 0,
          top: 'unset',
          borderRadius: '5px 0 0 0',
        },
      },
    },
  }),
);

addParameters({
  options: {
    theme: dark_theme,
    panelPosition: 'right',
    showPanel: false,
  },
});

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

configure(loadStories, module);
