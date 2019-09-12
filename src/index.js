import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import About from './components/about';
import Home from './components/home';

import customTheme from './theme/theme';

const divStyle = {
  backgroundColor: customTheme.colors.background
};

ReactDOM.render(
  <div style={divStyle}>
    <Navigation containers={[Home, About]}/>
  </div>,
  document.getElementById('root')
);
