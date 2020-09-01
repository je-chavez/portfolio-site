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
import SectionTitle from '../components/sectionTitle';
import SkillBar from '../components/skillBar';
import BubbleText from '../components/bubbleText';

const styles = makeStyles((theme) => ({
  divStyle: {
    backgroundColor: '#fff',
    paddingBottom: '100px',
    paddingTop: '50px',
  },
  grid: {
    height: '100%',
    marginTop: '30px',
    width: '100%',
  },
  gridItem: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconText: {
    textAlign: 'center',
    fontSize: '24px',
  },
  profileImg: {
    width: '300px',
    borderRadius: '50%',
    border: 'solid',
    borderColor: customTheme.colors.primary,
    borderWidth: '4px',
  },
}));

export default function About(props) {
  const classes = styles();

  return (
    <div id='about' style={{ backgroundColor: '#fff', width: '100%' }}>
      <Container className={classes.divStyle}>
        <SectionTitle title={'about'} id='about' />
        <Grid
          justify='space-around'
          className={classes.grid}
          container
          direction='row'
          spacing={5}
          style={{ paddingBottom: '50px' }}
        >
          <Grid
            item
            style={{
              'text-align': 'center',
            }}
          >
            <ion-icon
              name='construct'
              style={{
                'font-size': '60px',
                fill: customTheme.colors.primary,
                border: 'solid',
                borderWidth: '4px',
                borderColor: customTheme.colors.surface,
                borderRadius: '50px',
                padding: '10px',
              }}
            />
            <Typography className={classes.iconText}>Techie</Typography>
          </Grid>
          <Grid item style={{ 'text-align': 'center' }}>
            <ion-icon
              name='game-controller'
              style={{
                'font-size': '60px',
                color: customTheme.colors.primary,
                border: 'solid',
                borderWidth: '4px',
                borderColor: customTheme.colors.surface,
                borderRadius: '50px',
                padding: '10px',
              }}
            />
            <Typography className={classes.iconText}>Gamer</Typography>
          </Grid>
          <Grid item style={{ 'text-align': 'center' }}>
            <ion-icon
              name='camera'
              style={{
                'font-size': '60px',
                color: customTheme.colors.primary,
                border: 'solid',
                borderWidth: '4px',
                borderColor: customTheme.colors.surface,
                borderRadius: '50px',
                padding: '10px',
              }}
            />
            <Typography className={classes.iconText}>Photographer</Typography>
          </Grid>
          <Grid item style={{ 'text-align': 'center' }}>
            <span style={{ color: customTheme.colors.primary }}>
              <ion-icon
                name='navigate'
                style={{
                  'font-size': '60px',
                  border: 'solid',
                  borderWidth: '4px',
                  borderColor: customTheme.colors.surface,
                  borderRadius: '50px',
                  padding: '10px',
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
          <Grid item style={{ textAlign: 'center', maxWidth: '40%' }}>
            <img className={classes.profileImg} src='/assets/profile.jpg' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <ion-icon
                name='location-outline'
                style={{
                  'font-size': '22px',
                  paddingRight: '5px',
                  paddingBottom: '2px',
                }}
              />
              <Typography
                style={{
                  textAlign: 'center',
                  display: 'inline-block',
                  fontSize: '16px',
                }}
              >
                Seattle, WA
              </Typography>
            </div>
            <Divider />
            <div style={{ marginTop: 10 }}>
              <Typography>
                Hi! I'm a Full-Stack Developer based in the Silicon Valley. I'm
                an entrepreneur at heart, and love coming up with and working on
                new ideas!
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ textAlign: 'center', width: '40%' }}>
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
              <BubbleText text='Critical Thinker' />
              <BubbleText text='Proactive' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
