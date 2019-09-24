import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  buttonFont: {
    fontFamily: customTheme.fontStyle,
    color: '#fff',
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px'
    }
  },
  divStyle: {
    backgroundColor: customTheme.colors.primary,
    padding: '8px',
    display: 'inline-block',
    borderRadius: '20px',
    margin: '5px',
    minWidth: '50px',
    [theme.breakpoints.up('sm')]: {
      padding: '10px'
    }
  }
}));
export default function BubbleText(props) {
  const { text } = props;
  const classes = styles();
  return (
    <div className={classes.divStyle}>
      <Typography className={classes.buttonFont} variant='body1' style={{}}>
        {text}
      </Typography>
    </div>
  );
}
