import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import SmallProject from '../components/smallProject';
import BigProject from '../components/bigProject';

const styles = makeStyles({
  container: {
    padding: '0px 20px 100px 20px',
    backgroundColor: customTheme.colors.background_secondary
  },
  paper: {
    backgroundColor: '#fff',
    width: '500px'
  },
  sectionTitle: {
    fontWeight: 400,
    padding: '10px',
    fontFamily: customTheme.fontStyle,
    color: customTheme.colors.font_onBackground_secondary
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
            padding: '0px 0px 100px 0px'
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
        <BigProject
          title='Gub'
          description='A content hub for gaming. An easy-to-use application that
                delivers gaming news, trending twitch clips and gaming reviews
                straight to gamers. Published on the AppStore and Play Store.'
          primaryImage='http://juanchavez.me/assets/gub_news.png'
          secondaryImage='http://juanchavez.me/assets/gub_twitch.png'
          techStack={[
            'React Native',
            'Kubernetes',
            'Nodejs',
            'Microsoft Azure'
          ]}
          githubLink=''
          websiteLink='https://gub.gg'
        />

        <Divider style={{ margin: '50px' }} />
        <BigProject
          title='Ventura'
          description=' A location-based social media platform. The idea is to be able
          to see where your friends have gone and get ideas of where to
          adventure next.'
          primaryImage='http://juanchavez.me/assets/ventura_login.jpg'
          secondaryImage='http://juanchavez.me/assets/ventura_map.png'
          techStack={['Xamarin Forms', 'Nodejs', 'Microsoft Azure']}
          githubLink=''
        />

        <Grid
          justify='center'
          alignItems='center'
          className={classes.grid}
          style={{ paddingTop: '100px' }}
          container
          direction='row'
          spacing={5}>
          <Grid item>
            <SmallProject
              title='JWT Custom Auth'
              description='A custom authentication service that handles password hashing,
                strength verification and token distribution.'
              githubLink='https://github.com/je-chavez/custom-authentication'
              techStack={['Nodejs', 'Express', 'MongoDB']}
            />
          </Grid>
          <Grid item>
            <SmallProject
              title='IGN News Scraper'
              description='A simple web scraper that gets news from IGN and stores it into
                a database. Uses Cheerio to parse HTML markup.'
              githubLink='https://github.com/je-chavez/ign-scraper'
              techStack={['Nodejs', 'Cheerio', 'Express', 'MongoDB']}
            />
          </Grid>
          <Grid item>
            <SmallProject
              title='Portfolio Site'
              description='The first iteration of my Portfolio site. It was built using
              ReactJS, and hosted on Azure.'
              githubLink='https://github.com/je-chavez/portfolio-site'
              techStack={['ReactJS', 'Microsoft Azure']}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
