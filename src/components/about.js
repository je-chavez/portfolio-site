import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Paper, Divider, Grid } from '@material-ui/core';
import BubbleText from './bubbleText';

const styles = makeStyles({
  paper: {
    backgroundColor: customTheme.colors.background_secondary
  },
  container: {
    height: '100vh',
    paddingTop: '60px'
  },
  sectionTitle: {
    color: customTheme.colors.background_secondary,
    fontWeight: 400,
    padding: '20px'
  },
  image: {
    maxWidth: '200px',
    borderRadius: '50%'
  },
  ul: {
    columnCount: 2
  },
  grid: {
    height: '100%'
  },
  spacer: {
    height: '10%'
  }
});

export default function About(props) {
  const classes = styles();

  return (
    <div style={{ backgroundColor: customTheme.colors.background_secondary }}>
      <Container id='about' className={classes.container}>
        <Grid
          justify='center'
          alignItems='center'
          className={classes.grid}
          container
          direction='row'
          spacing={5}>
          <Grid item>
            <Paper
              style={{
                width: '530px',
                height: '440px',
                textAlign: 'center',
                padding: '20px'
              }}>
              <img
                className={classes.image}
                style={{ padding: '20px' }}
                src='http://juanchavez.me/img/profile.jpg'
              />
              <Divider style={{ width: '50%', margin: 'auto' }} />

              <Typography
                variant='body1'
                style={{
                  padding: '20px',
                  fontFamily: customTheme.fontStyle,
                  fontSize: '18px',
                  color: customTheme.colors.font_onBackground_secondary
                }}>
                Hi! I'm a Full-Stack Developer based in the Silicon Valley. I'm
                an entrepreneur at heart, and love coming up with and working on
                new ideas! My main focus as of recent has been full-stack mobile
                development, but I'm always eager to learn about new
                technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              style={{
                width: '530px',
                height: '440px',
                textAlign: 'center',
                padding: '20px'
              }}>
              <Typography
                variant='h4'
                style={{
                  padding: '20px',
                  fontFamily: customTheme.fontStyle,
                  color: customTheme.colors.font_onBackground_secondary
                }}>
                Things I'm Familiar With
              </Typography>
              <div
                style={{
                  position: 'relative',
                  top: '35%',
                  transform: 'translateY(-50%)',
                  paddingRight: '20px',
                  paddingLeft: '20px'
                }}>
                <div>
                  <BubbleText text='C#' />
                  <BubbleText text='Swift' />
                  <BubbleText text='Node.js' />
                </div>
                <div>
                  <BubbleText text='JavaScript' />
                  <BubbleText text='Microsoft Azure' />
                  <BubbleText text='React Native' />
                  <BubbleText text='Flutter' />
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
