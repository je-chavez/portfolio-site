import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../../theme/theme';
import { Typography, Grid, Container } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  textGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '400px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '300px',
    },
    zIndex: 1,
    // backgroundColor: customTheme.colors.background_secondary,
  },
  imageGridItem: {
    display: 'flex',
    width: '60%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
  },
  projectImage: {
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '200px',
      width: '0px',
      display: 'none',
    },
  },
  secondProjectImage: {
    maxHeight: '400px',
    width: '210px',
    display: 'block',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '200px',
      width: '0px',
      display: 'none',
    },
  },
  grid: {
    height: '100%',
    marginTop: '30px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
}));

export default function ProjectCard(props) {
  const {
    title,
    description,
    techStack,
    ghLink,
    websiteLink,
    previewImage,
  } = props;

  const classes = styles();

  return (
    <div
      style={{
        width: '100%',
        marginTop: '30px',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <Container>
        <Grid className={classes.grid} container direction='row' spacing={3}>
          <Grid className={classes.textGridItem} item>
            <Typography
              style={{ paddingBottom: '20px', fontSize: '32px', width: '100%' }}
            >
              {title.toUpperCase()}
            </Typography>
            <Typography>{description}</Typography>
            <div style={{ paddingTop: '40px', width: '100%' }}>
              <Typography
                style={{
                  border: 'solid 2px #000',
                  borderRadius: '5px',
                  padding: '10px',
                  display: 'inline-block',
                }}
              >
                SEE PROJECT
              </Typography>
            </div>
          </Grid>
          <Grid className={classes.imageGridItem} item>
            <div style={{ padding: '5px' }}>
              <img src={previewImage} className={classes.projectImage} />
            </div>
            <div style={{ padding: '5px' }}>
              <img src={previewImage} className={classes.secondProjectImage} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
