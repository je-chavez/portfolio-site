import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../../theme/theme';
import { Typography } from '@material-ui/core';

const styles = makeStyles({
  text: {
    fontFamily: customTheme.fontStyle,
  },
  container: {
    padding: '5px',
    border: 'solid 1px',
    borderColor: customTheme.colors.primary,
    display: 'inline-block',
    margin: '5px',
    borderRadius: '15px',
  },
});

export default function ToolText(props) {
  const classes = styles();
  const { text } = props;

  return (
    <div className={classes.container}>
      <Typography variant='body2' className={classes.text}>
        {text}
      </Typography>
    </div>
  );
}
