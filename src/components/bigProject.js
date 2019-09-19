import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Typography, Paper, Divider, Grid, Hidden } from '@material-ui/core';
import ToolText from './toolText';

const styles = makeStyles(theme => ({
  paper: {
    backgroundColor: '#fff',
    width: '500px',
    height: '350px',
    textAlign: 'center',
    padding: '20px'
  },
  projectTitle: {
    fontFamily: customTheme.fontStyle,
    textAlign: 'center',
    color: customTheme.colors.font_onBackground_secondary
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
  },
  projectImage: {
    maxHeight: '400px',
    width: '210px'
  },
  secondProjectImage: {
    maxHeight: '400px',
    width: '210px',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
}));

export default function SmallProject(props) {
  const classes = styles();
  const {
    title,
    description,
    techStack,
    githubLink,
    websiteLink,
    primaryImage,
    secondaryImage
  } = props;

  let logo = () => {
    if (githubLink) {
      return (
        <a className={classes.logo} href={githubLink} target='_blank'>
          <ion-icon
            name='logo-github'
            size='large'
            style={{ padding: '20px' }}></ion-icon>
        </a>
      );
    } else if (websiteLink) {
      return (
        <a className={classes.logo} href={websiteLink} target='_blank'>
          <ion-icon
            name='globe'
            size='large'
            style={{ padding: '20px' }}></ion-icon>
        </a>
      );
    }
    return;
  };

  return (
    <Grid
      justify='center'
      alignItems='center'
      className={classes.grid}
      container
      direction='row'
      spacing={5}>
      <Grid item>
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
          {logo()}
        </Paper>
      </Grid>
      <Grid item>
        <img className={classes.projectImage} src={primaryImage} />
      </Grid>
        <Grid item>
          <img className={classes.secondProjectImage} src={secondaryImage} />
        </Grid>
    </Grid>
  );
}
