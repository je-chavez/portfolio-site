import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../../theme/theme';
import { Typography, Grid, Container, Divider } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  textGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '20px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  imageGridItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
  },
  projectLogo: {
    display: 'inline-block',
    maxWidth: '40px',
    marginLeft: '20px',
  },
  projectImageSM: {
    display: 'none',
    maxHeight: '250px',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  projectImage: {
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      maxHeight: '250px',
    },
  },
  secondProjectImage: {
    maxHeight: '400px',
    width: '210px',
    display: 'block',
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  grid: {
    height: '100%',
    marginTop: '30px',
    width: '100%',
    justifyContent: 'space-between',
  },
  projectTitleDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0px',
    },
  },
  projectTitle: {
    fontSize: '32px',
    display: 'inline-block',
  },
  projectDescriptionDiv:{
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  projectDescriptionText:{
    width: '400px',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
    },
  },
  seeProjectDiv: {
    paddingTop: '40px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0px',
    },
  },
  seeProjectText: {
    border: 'solid 2px #000',
    borderRadius: '5px',
    padding: '10px',
    display: 'inline-block',
  },
  divider: {
    marginTop: '20px'
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
      }}>
      <Container>
        <Grid className={classes.grid}  container direction='row'>
          <Grid className={classes.textGridItem} item>
            <div className={classes.projectTitleDiv}>
              <Typography className={classes.projectTitle}>
                {title.toUpperCase()}
              </Typography>
              <img
                src='https://gub.app/assets/images/icon_android_512.ico'
                className={classes.projectLogo}
              />
            </div>

            <div
              className={classes.projectDescriptionDiv}>
              <Typography className={classes.projectDescriptionText}>{description}</Typography>
              <img src={previewImage} className={classes.projectImageSM} />
            </div>
            <div className={classes.seeProjectDiv}>
              <Typography className={classes.seeProjectText}>
                SEE PROJECT
              </Typography>
            </div>
          </Grid>
          <Grid className={classes.imageGridItem} item>
            <div style={{ padding: '5px' }}></div>
            <div style={{ padding: '5px' }}>
              <img src={previewImage} className={classes.projectImage} />
            </div>
            <div style={{ padding: '5px' }}>
              <img src={previewImage} className={classes.secondProjectImage} />
            </div>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Container>
    </div>
  );
}
