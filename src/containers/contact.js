import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Paper } from '@material-ui/core';
import SectionTitle from '../components/sectionTitle';

const styles = makeStyles((theme) => ({
  container: {
    padding: '60px 0px 100px 0px',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      padding: '100px 0px 100px 0px',
    },
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    width: '300px',
    height: '400px',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '500px',
      height: '300px',
    },
  },
  title: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    paddingBottom: '20px',
    fontSize: '30px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '36px',
    },
  },
  subtitle: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '16px',
  },
  body: {
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
    fontSize: '18px',
    padding: '30px',
    paddingBottom: '50px',
  },
  logo: {
    color: customTheme.colors.font_onBackground_secondary,
    '&:hover': {
      color: customTheme.colors.primary,
    },
    padding: '20px',
  },
}));

export default function Contact(props) {
  const classes = styles();

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Container id='contact' className={classes.container}>
        <SectionTitle title={'contact'} />
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
            target='_blank'
          >
            <ion-icon
              name='mail'
              size='large'
              style={{
                padding: '8px',
                border: 'solid 1px',
                borderRadius: '50%',
              }}
            ></ion-icon>
          </a>
        </Paper>
      </Container>
    </div>
  );
}
