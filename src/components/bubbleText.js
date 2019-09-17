import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography } from '@material-ui/core';

export default function BubbleText(props) {
  const { text } = props;

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
      <Typography
        variant='body1'
        style={{
          fontFamily: customTheme.fontStyle,
          color: '#fff',
        }}>
        {text}
      </Typography>
    </div>
  );
}
