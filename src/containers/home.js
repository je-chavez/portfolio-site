import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import './home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const styles = makeStyles(theme => ({
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameFont: {
    color: customTheme.colors.font_primary,
    fontWeight: 400,
    padding: '10px',
    fontSize: '50px',
    fontFamily: customTheme.fontStyle,
  },
  titleFont: {
    color: customTheme.colors.font_primary,
    fontWeight: 100,
    padding: '10px',
    fontFamily: customTheme.fontStyle,
  },
  divider: {
    color: customTheme.colors.primary,
    backgroundColor: customTheme.colors.primary,
    width: '300px',
    height: '2px',
  },
  decorationDiv: {
    height: '200px',
    width: '200px'
  },
  barOne: {
    backgroundColor: customTheme.colors.primary,
    width: '20px',
    height: '150px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  barTwo: {
    backgroundColor: customTheme.colors.primary,
    width: '20px',
    height: '300px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  barThree: {
    backgroundColor: customTheme.colors.primary,
    width: '20px',
    height: '100px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  grid: {
    padding: '0px 20px',
    position: 'absolute',
    top: '0px'
  },
  mainDiv: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  learnMoreText: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_primary
  },
  arrowIcon: {
    color: customTheme.colors.font_primary,
    textDecoration: 'none',
    '&:hover': {
      color: customTheme.colors.primary
    }
  },
  learnMoreBanner: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '20px'
  },
  listItem: {
    fontFamily: customTheme.fontStyle,
    '&:hover': {
      backgroundColor: 'inherit',
      color: customTheme.colors.primary
    }
  },
  listItemText: {
    fontFamily: customTheme.fontStyle,
    fontSize: '18px',
    padding: '10px',
    paddingTop: '0px',
    '&:hover': {
      color: customTheme.colors.primary
    }
  },
  anchor: {
    color: customTheme.colors.font_primary,
    fontFamily: customTheme.fontStyle,
    textDecoration: 'none'
  }
}));

export default function Home(props) {
  const classes = styles();

  return (
    <div className={classes.mainDiv}>
      <Grid className={classes.grid} container direction='row' spacing={0}>
        <Grid item className={classes.barOne}></Grid>
        <Grid item className={classes.barTwo}></Grid>
        <Grid item className={classes.barThree}></Grid>
      </Grid>
      <Container id='home' classN ame={classes.container}>
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
        <AnchorLink className={classes.arrowIcon} href='#about'>
          <i
            className='material-icons'
            style={{ fontSize: '32px' }}
            id='arrowDown'>
            keyboard_arrow_down
          </i>
        </AnchorLink>
      </div>
    </div>
  );
}
