import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
  mainDivFooter: {
    height: '200px',
    width: '100%',
    backgroundColor: customTheme.colors.background,
    textAlign: 'center',
    paddingTop: '50px'
  },
  logo: {
    color: customTheme.colors.font_primary,
    '&:hover': {
      color: customTheme.colors.primary
    },
    padding: '20px'
  },
  name: {
    color: customTheme.colors.font_primary,
    fontFamily: customTheme.fontStyle,
    fontSize: '14px',
    paddingTop: '20px'
  },
  footerDivider: {
    display: 'inline-block',
    width: '150px',
    height: '1px',
    backgroundColor: customTheme.colors.background_secondary,
    marginBottom:'24px'
  }
});

export default function Footer(props) {
  const classes = styles();

  return (
    <div className={classes.mainDivFooter}>
      <div
        className={classes.footerDivider}
      />
      <a
        className={classes.logo}
        href='https://github.com/je-chavez'
        target='_blank'>
        <ion-icon
          name='logo-github'
          size='large'
          style={{
            padding: '8px',
            border: 'solid 1px',
            borderRadius: '50%'
          }}></ion-icon>
      </a>
      <a
        className={classes.logo}
        href='https://linkedin.com/in/juanenriquechavez'
        target='_blank'>
        <ion-icon
          name='logo-linkedIn'
          size='large'
          style={{
            padding: '8px',
            border: 'solid 1px',
            borderRadius: '50%'
          }}></ion-icon>
      </a>
      <a
        className={classes.logo}
        href='https://instagram.com/juandollah'
        target='_blank'>
        <ion-icon
          name='logo-instagram'
          size='large'
          style={{
            padding: '8px',
            border: 'solid 1px',
            borderRadius: '50%'
          }}></ion-icon>
      </a>
      <div
        className={classes.footerDivider}
      />
      <Typography className={classes.name} variant='body1'>
        JUAN CHAVEZ •{' '}
        <span style={{ color: customTheme.colors.primary }}>2019</span>
      </Typography>
    </div>
  );
}
