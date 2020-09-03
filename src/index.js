import React from 'react';
import ReactDOM from 'react-dom';
import About from './containers/about';
import Home from './containers/home';
import Projects from './containers/projects';
import customTheme from './theme/theme';
import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/shared/navigation';
import Footer from './containers/footer';
import Contact from './containers/contact';

const divStyle = {
  backgroundColor: customTheme.colors.background,
  padding: '0px',
  margin: '0px',
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
      <Grid item>
        <Contact />
      </Grid>
    </Grid>
    <Footer />
  </div>,
  document.getElementById('root')
);
