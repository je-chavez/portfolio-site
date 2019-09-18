import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Paper, Divider, Grid } from '@material-ui/core';

const styles = makeStyles({
  container: {
    height: '90vh',
    padding: '20px',
    backgroundColor: customTheme.colors.background_secondary
  },
  paper: {
    backgroundColor: customTheme.colors.background
  },
  sectionTitle: {
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle
  }
});

export default function Projects(props) {
  const classes = styles();

  return (
    <div style={{ backgroundColor: customTheme.colors.background_secondary }}>
      <Container id='projects' className={classes.container}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            padding: '20px 0px 100px 0px'
          }}>
          <Typography variant='h2' className={classes.sectionTitle}>
            projects
          </Typography>
          <div
            style={{
              height: '10px',
              width: '50px',
              margin: 'auto',
              backgroundColor: customTheme.colors.primary
            }}
          />
        </div>
        <Paper style={{ height: '200px' }} className={classes.paper}>
          <Typography variant='h4'>Gub</Typography>
        </Paper>
      </Container>
    </div>
  );
}
