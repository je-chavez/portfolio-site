import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import {
  Container,
  Typography,
  Paper,
  Divider,
  Grid,
  Button
} from '@material-ui/core';

const styles = makeStyles({
  container: {
    padding: '20px',
    paddingTop: '10%',
    paddingBottom: '20%',
    height: '100vh'
  },
  fontColor: {
    color: customTheme.colors.font_onBackground
  },
  fontWeight: {
    fontWeight: 400
  },
  image: {
    height: '400px',
    borderRadius: '50%'
  },
  grid: {
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  paper: {
    backgroundColor: customTheme.colors.surface,
    width: '100%'
  },
  spacing: {
    height: '90%'
  },
  button: {
    backgroundColor: customTheme.colors.primary,
    bottom: 0
  }
});

export default function Home(props) {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <div className={classes.spacing}>
        <Paper className={classes.paper}>
          <Grid
            className={classes.grid}
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={5}>
            <Grid item>
              <img
                className={classes.image}
                src='http://juanchavez.me/img/profile.jpg'
              />
            </Grid>
            <Grid item>
              <Typography className={classes.fontColor} variant='h2'>
                Hey! My name is
              </Typography>
              <Typography
                className={[classes.fontColor, classes.fontWeight]}
                variant='h1'>
                Juan Chavez
              </Typography>
              <Typography className={classes.fontColor} variant='h2'>
                I'm a fullstack developer.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}
