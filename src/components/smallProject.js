import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography, Paper, Divider, Grid } from '@material-ui/core';
import ToolText from './toolText';

const styles = makeStyles(theme => ({
  paper: {
    backgroundColor: '#fff',
    width: '300px',
    height: '350px',
    textAlign: 'center',
    padding: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '350px',
      height: '320px'
    }
  },
  projectTitle: {
    fontFamily: customTheme.fontStyle,
    textAlign: 'center',
    fontSize: '30px',
    color: customTheme.colors.font_onBackground_secondary,
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px'
    }
  },
  projectDescription: {
    fontFamily: customTheme.fontStyle,
    textAlign: 'center',
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '18px'
  },
  logo: {
    textDecoration: 'none',
    color: customTheme.colors.background,
    '&:hover': {
      color: customTheme.colors.primary
    }
  }
}));

export default function SmallProject(props) {
  const classes = styles();
  const { title, description, techStack, githubLink } = props;

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.projectTitle} variant='h4'>
        {title}
      </Typography>
      <div style={{ width: '100px', margin: 'auto', padding: '20px 0px' }}>
        <Divider style={{ width: '100px' }} />
      </div>
      <Typography className={classes.projectDescription} variant='body1'>
        {description}
      </Typography>
      &nbsp;
      <div>
        {techStack.map((value, index) => {
          return <ToolText text={value} />;
        })}
      </div>
      <a className={classes.logo} href={githubLink} target='_blank'>
        <ion-icon
          name='logo-github'
          size='large'
          style={{ padding: '20px' }}></ion-icon>
      </a>
    </Paper>
  );
}
