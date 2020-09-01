import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  sectionTitle: {
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '45px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '45px',
    },
    textAlign: 'center',
  },
  sectionTitleLine: {
    height: '10px',
    width: '50px',
    margin: 'auto',
    backgroundColor: customTheme.colors.primary,
  },
}));

export default function SectionTitle(props) {
  const { title } = props;
  const classes = styles();
  return (
    <div>
      <Typography variant='h2' className={classes.sectionTitle}>
        {title}
      </Typography>
      <div className={classes.sectionTitleLine} />
    </div>
  );
}
