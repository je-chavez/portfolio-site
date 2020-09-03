import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import SectionTitle from '../components/shared/sectionTitle';
import SkillBar from '../components/about/skillBar';
import BubbleText from '../components/about/bubbleText';

const styles = makeStyles((theme) => ({
  divStyle: { backgroundColor: '#fff', width: '100%' },
  containerStyle: {
    backgroundColor: '#fff',
    paddingBottom: '100px',
    paddingTop: '50px',
  },
  grid: {
    height: '100%',
    marginTop: '30px',
    width: '100%',
    paddingBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0px',
    },
    textAlign: 'center',
    margin: 0,
  },
  gridItem: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  iconText: {
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
  },
  aboutText: {
    fontSize: '16px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary,
  },
  aboutDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  profileImg: {
    width: '300px',
    borderRadius: '50%',
    border: 'solid',
    borderColor: customTheme.colors.primary,
    borderWidth: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      marginBottom: '20px',
    },
  },
}));

export default function About(props) {
  const classes = styles();

  return (
    <div id='about' className={classes.divStyle}>
      <Container className={classes.containerStyle}>
        <SectionTitle title={'about'} id='about' />
        <Grid
          justify='space-evenly'
          className={classes.grid}
          container
          direction='row'
          spacing={3}
        >
          <Grid item>
            <ion-icon
              name='construct'
              style={{
                'font-size': '50px',
                color: customTheme.colors.primary,
                border: 'solid',
                borderWidth: '4px',
                borderColor: customTheme.colors.surface,
                borderRadius: '50px',
                padding: '15px',
              }}
            />
            <Typography className={classes.iconText}>Techie</Typography>
          </Grid>
          <Grid item>
            <ion-icon
              name='game-controller'
              style={{
                'font-size': '50px',
                color: customTheme.colors.primary,
                border: 'solid',
                borderWidth: '4px',
                borderColor: customTheme.colors.surface,
                borderRadius: '50px',
                padding: '15px',
              }}
            />
            <Typography className={classes.iconText}>Gamer</Typography>
          </Grid>

          <Grid item>
            <span style={{ color: customTheme.colors.primary }}>
              <ion-icon
                name='navigate'
                style={{
                  'font-size': '50px',
                  color: customTheme.colors.primary,
                  border: 'solid',
                  borderWidth: '4px',
                  borderColor: customTheme.colors.surface,
                  borderRadius: '50px',
                  padding: '15px',
                }}
              />
            </span>
            <Typography className={classes.iconText}>Traveler</Typography>
          </Grid>
        </Grid>
        <Grid
          justify='space-between'
          className={classes.grid}
          container
          direction='row'
        >
          <Grid item className={classes.gridItem}>
            <img className={classes.profileImg} src='/assets/profile.jpg' />
            <div className={classes.aboutDiv}>
              <ion-icon
                name='location-outline'
                style={{
                  'font-size': '22px',
                  paddingRight: '5px',
                  paddingBottom: '2px',
                }}
              />
              <Typography className={classes.aboutText}>Seattle, WA</Typography>
            </div>
            <Divider style={{ marginBottom: 10 }} />
            <Typography
              className={classes.aboutText}
              style={{ paddingBottom: '10px' }}
            >
              This is where my killer statement is going to go, I think.
              Something about who I am, what I want to do and what my next steps
              are. Huehuheuehuehue.
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <SkillBar skillName='JavaScript' percentage='85%' />
            <SkillBar skillName='Node.js' percentage='80%' />
            <SkillBar skillName='React Native' percentage='60%' />
            <SkillBar skillName='ReactJS' percentage='20%' />
            <SkillBar skillName='Flutter' percentage='20%' />
            <SkillBar skillName='Xamarin' percentage='50%' />
            <div style={{ marginTop: '20px' }}>
              <BubbleText text='Friendly' />
              <BubbleText text='Energetic' />
              <BubbleText text='Collaborative' />
              <BubbleText text='Quick learner' />
              <BubbleText text='Adaptable' />
              <BubbleText text='Proactive' />
              <BubbleText text='Flexible' />
              <BubbleText text='Logical' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
