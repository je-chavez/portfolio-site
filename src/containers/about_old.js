import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import {
  Container,
  Typography,
  Paper,
  Divider,
  Grid,
  Hidden,
} from '@material-ui/core';
import BubbleText from '../components/bubbleText';

const styles = makeStyles((theme) => ({
  paper: {
    width: '300px',
    textAlign: 'center',
    padding: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '530px',
      height: '440px',
    },
  },
  secondPaper: {
    width: '300px',
    textAlign: 'center',
    padding: '20px',
    height: '580px',
    [theme.breakpoints.up('sm')]: {
      width: '530px',
      height: '440px',
    },
  },
  container: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      padding: '100px 0px 60px 0px',
    },
  },
  image: {
    maxWidth: '200px',
    borderRadius: '50%',
  },
  ul: {
    columnCount: 2,
  },
  grid: {
    padding: '0px 0px 150px 0px',
    margin: '0px',
  },
  spacer: {
    height: '10%',
  },
  sectionTitle: {
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '50px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
  },
  descriptionFont: {
    padding: '20px',
    fontFamily: customTheme.fontStyle,
    fontSize: '18px',
    color: customTheme.colors.font_onBackground_secondary,
  },
  sectionFont: {
    padding: '20px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    paddingBottom: '40px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px',
    },
  },
}));

export default function About(props) {
  const classes = styles();

  return (
    <div
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Container id='about' className={classes.container}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography variant='h2' className={classes.sectionTitle}>
            about
          </Typography>
          <div
            style={{
              height: '10px',
              width: '50px',
              margin: 'auto',
              backgroundColor: customTheme.colors.primary,
            }}
          />
        </div>

        <Grid
          justify='center'
          alignItems='center'
          className={classes.grid}
          container
          direction='row'
        >
          <Grid item style={{ padding: '30px' }}>
            <Paper className={classes.paper}>
              <img
                className={classes.image}
                style={{ padding: '20px' }}
                src='/assets/profile.jpg'
              />
              <Divider style={{ width: '25%', margin: 'auto' }} />

              <Typography variant='body1' className={classes.descriptionFont}>
                Hi! I'm a Full-Stack Developer based in the Silicon Valley. I'm
                an entrepreneur at heart, and love coming up with and working on
                new ideas! My main focus as of recent has been full-stack mobile
                development, but I'm always eager to learn about new
                technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.secondPaper}>
              <Typography variant='h4' className={classes.sectionFont}>
                Things I'm Familiar With
              </Typography>
              <Divider style={{ width: '25%', margin: 'auto' }} />
              <div
                style={{
                  position: 'relative',
                  top: '35%',
                  transform: 'translateY(-50%)',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                }}
              >
                <div>
                  <BubbleText text='C#' />
                  <BubbleText text='Swift' />
                  <BubbleText text='Node.js' />
                </div>
                <div>
                  <BubbleText text='JavaScript' />
                  <BubbleText text='Microsoft Azure' />
                  <BubbleText text='React Native' />
                </div>
                <div>
                  <BubbleText text='MongoDB' />
                  <BubbleText text='Kubernetes' />
                  <BubbleText text='Express' />
                  <BubbleText text='Java' />
                </div>
                <div>
                  <BubbleText text='ReactJS' />
                  <BubbleText text='Docker' />
                  <BubbleText text='Xamarin' />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
