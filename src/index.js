import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Home from './components/home';

import customTheme from './theme/theme';

const divStyle = {
  backgroundColor: customTheme.colors.background,
  padding: '0px',
  margin: '0px'
};

ReactDOM.render(
  <div style={divStyle}>
    <Home />
    <About />
  </div>,
  document.getElementById('root')
);
