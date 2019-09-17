import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import {
  Container,
  Typography,
  Divider,
  Grid,
  ListItem,
  ListItemText
} from '@material-ui/core';
import './home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const styles = makeStyles(theme => ({
  container: {
    width: '80%',
    paddingTop: '5%'
  },
  descriptorText: {
    padding: '10px',
    fontColor: customTheme.colors.font_primary
  },
  nameDiv: {
    width: '500px',
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
    width: '20px',
    height: '150px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  barTwo: {
    backgroundColor: customTheme.colors.primary,
    width: '20px',
    height: '300px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  barThree: {
    backgroundColor: customTheme.colors.primary,
    width: '20px',
    height: '100px',
    margin: '0px 5px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
  },
  grid: {
    padding: '0px 20px'
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
    bottom: '50px'
  },
  navbar: {
    height: '50px',
    width: '100%',
    backgroundColor: customTheme.colors.background,
    position: 'absolute',
    bottom: '-50px',
    left: '0px',
    borderBottom: '4px solid',
    borderBottomColor: customTheme.colors.primary,
    paddingTop: '10px'
  },
  listItem: {
    '&:hover': {
      backgroundColor: 'inherit',
      color: customTheme.colors.primary
    }
  },
  anchor: {
    color: customTheme.colors.font_primary,
    fontFamily: customTheme.fontStyle,
    textDecoration: 'none'
  },
  sectionDesktop: {
    display: 'none',
    paddingLeft: '5%',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
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
        <AnchorLink className={classes.arrowIcon} href='#about'>
          <i
            className='material-icons'
            style={{ fontSize: '32px' }}
            id='arrowDown'>
            keyboard_arrow_down
          </i>
        </AnchorLink>
      </div>
      <nav className={classes.navbar}>
        <div className={classes.sectionDesktop}>
          <AnchorLink className={classes.anchor} href='#about' offset={150}>
            <ListItem className={classes.listItem} button key='About'>
              <ListItemText primary='About' />
            </ListItem>
          </AnchorLink>
          <AnchorLink className={classes.anchor} href='#projects' offset={150}>
            <ListItem className={classes.listItem} button key='Projects'>
              <ListItemText primary='Projects' />
            </ListItem>
          </AnchorLink>{' '}
          <AnchorLink className={classes.anchor} href='#contact' offset={150}>
            <ListItem className={classes.listItem} button key='Contact'>
              <ListItemText primary='Contact' />
            </ListItem>
          </AnchorLink>{' '}
          <a className={classes.anchor} href='/resume.pdf' target='_blank'>
            <ListItem className={classes.listItem} button key='Resume'>
              <ListItemText primary='Resume' />
            </ListItem>
          </a>
        </div>
      </nav>
    </div>
  );
}
