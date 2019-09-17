import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
  buttonFont: {
    fontFamily: customTheme.fontStyle,
    color: '#fff',
    fontSize: '18px'
  }
});
export default function BubbleText(props) {
  const { text } = props;
  const classes = styles();
  return (
    <div
      style={{
        backgroundColor: customTheme.colors.primary,
        padding: '10px',
        display: 'inline-block',
        borderRadius: '20px',
        margin: '5px',
        minWidth: '50px'
      }}>
      <Typography className={classes.buttonFont} variant='body1' style={{}}>
        {text}
      </Typography>
    </div>
  );
}
