import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Paper } from '@material-ui/core';

const styles = makeStyles({
  container: {
    padding: '100px 0px 280px 0px',
    display: 'block'
  },
  sectionTitle: {
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    width: '600px',
    height: '300px',
    margin: 'auto'
  },
  title: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    paddingBottom: '20px'
  },
  subtitle: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '16px'
  },
  body: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '18px',
    padding: '30px',
    paddingBottom: '50px'
  },
  logo: {
    color: customTheme.colors.font_onBackground_secondary,
    '&:hover': {
      color: customTheme.colors.primary
    },
    padding: '20px'
  }
});

export default function Contact(props) {
  const classes = styles();

  return (
    <div style={{ backgroundColor: customTheme.colors.background_secondary }}>
      <Container id='contact' className={classes.container}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            padding: '20px 0px 100px 0px'
          }}>
          <Typography variant='h2' className={classes.sectionTitle}>
            contact
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
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant='h4'>
            Next Steps
          </Typography>
          <Typography className={classes.body} variant='body2'>
            I'm currently looking for a Junior Developer role. If you - or
            anyone you know - are looking to hire, reach out!
          </Typography>
          <a
            className={classes.logo}
            href='mailto: juanenriquechavez@outlook.com'
            target='_blank'>
            <ion-icon
              name='mail'
              size='large'
              style={{
                padding: '8px',
                border: 'solid 1px',
                borderRadius: '50%'
              }}></ion-icon>
          </a>
        </Paper>
      </Container>
    </div>
  );
}
