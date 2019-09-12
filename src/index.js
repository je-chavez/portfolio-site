import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import About from './components/about';
import customTheme from './theme/theme';

const divStyle = {
  backgroundColor: customTheme.colors.background
}

ReactDOM.render(
  <div style={divStyle}>
    <Navigation containers={[About]}/>
  </div>,
  document.getElementById('root')
);
