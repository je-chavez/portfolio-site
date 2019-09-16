import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import './home.css';

const styles = makeStyles({
  container: {
    width: '80%',
    paddingTop: '5%'
  },
  descriptorText: {
    padding: '10px',
    fontColor: customTheme.colors.font_primary
  },
  nameDiv: {
    width: '40%',
    textAlign: 'center',
    display: 'block',
    margin: 'auto'
  },
  nameFont: {
    color: customTheme.colors.font_primary,
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle
  },
  titleFont: {
    color: customTheme.colors.font_primary,
    fontWeight: 100,
    padding: '10px',
    fontFamily: customTheme.fontStyle
  },
  divider: {
    color: customTheme.colors.primary,
    backgroundColor: customTheme.colors.primary
  },
  decorationDiv: {
    height: '200px',
    width: '200px'
  },
  barOne: {
    backgroundColor: customTheme.colors.primary,
    width: '10px',
    height: '150px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  barTwo: {
    backgroundColor: customTheme.colors.primary,
    width: '10px',
    height: '250px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  barThree: {
    backgroundColor: customTheme.colors.primary,
    width: '10px',
    height: '100px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  grid: {
    margin: '0px 10px'
  },
  mainDiv: {
    height: '100vh'
  },
  learnMoreText: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_primary
  },
  arrowIcon: {
    color: customTheme.colors.font_primary,
    textDecoration: 'none'
  },
  learnMoreBanner: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0
  }
});

export default function Home(props) {
  const classes = styles();

  return (
    <div className={classes.mainDiv}>
      <Grid className={classes.grid} container direction='row' spacing={2}>
        <Grid item className={classes.barOne}></Grid>
        <Grid item className={classes.barTwo}></Grid>
        <Grid item className={classes.barThree}></Grid>
      </Grid>
      <Container id='home' className={classes.container}>
        <div className={classes.nameDiv}>
          <Typography variant='h2' className={classes.nameFont}>
            Juan Chavez
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant='h5' className={classes.titleFont}>
            Fullstack Developer
          </Typography>
        </div>
      </Container>
      <div className={classes.learnMoreBanner}>
        <a className={classes.arrowIcon} href='#about'>
          <i
            className='material-icons'
            style={{ fontSize: '32px' }}
            id='arrowDown'>
            keyboard_arrow_down
          </i>
        </a>
      </div>
    </div>
  );
}
