import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Home from './components/home';
import Projects from './components/projects';
import customTheme from './theme/theme';
import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation';

const divStyle = {
  backgroundColor: customTheme.colors.background,
  padding: '0px',
  margin: '0px'
};
ReactDOM.render(
  <div style={divStyle}>
    <Home />
    <Navigation />
    <Grid container direction='column'>
      <Grid item>
        <About />
      </Grid>
      <Grid item>
        <Projects />
      </Grid>
    </Grid>
  </div>,
  document.getElementById('root')
);
