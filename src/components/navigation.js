import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import customTheme from '../theme/theme.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Navbar } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  navbar: {
    height: '50px',
    width: '100%',
    backgroundColor: customTheme.colors.background,
    borderBottom: '4px solid',
    borderBottomColor: customTheme.colors.primary,
    paddingTop: '30px',
    paddingLeft: '30px'
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
      color: customTheme.colors.primary,
      textDecoration: 'none'
    }
  },
  anchor: {
    color: customTheme.colors.font_primary,
    fontFamily: customTheme.fontStyle,
    textDecoration: 'none',
    '&:hover': {
      color: customTheme.colors.primary,
      textDecoration: 'none'
    }
  },
}));

export default function ResponsiveNavigation(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar sticky='top' className={classes.navbar}>
        <AnchorLink className={classes.anchor} href='#about' offset={-30}>
          <p className={classes.listItemText}>about</p>
        </AnchorLink>
        <AnchorLink className={classes.anchor} href='#projects' offset={80}>
          <p className={classes.listItemText}>projects</p>
        </AnchorLink>
        <AnchorLink className={classes.anchor} href='#contact' offset={-40}>
          <p className={classes.listItemText}>contact</p>
        </AnchorLink>
        <a className={classes.anchor} href='/resume.pdf' target='_blank'>
          <p className={classes.listItemText}>resume</p>
        </a>
      </Navbar>
    </React.Fragment>
  );
}
