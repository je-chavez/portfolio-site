import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import SmallProject from '../components/smallProject';
import BigProject from '../components/bigProject';
import SectionTitle from '../components/sectionTitle';

const styles = makeStyles((theme) => ({
  container: {
    padding: '0px 20px 100px 20px',
    backgroundColor: customTheme.colors.background_secondary,
  },
  paper: {
    backgroundColor: '#fff',
    width: '500px',
  },
}));

export default function Projects(props) {
  const classes = styles();

  return (
    <div
      style={{
        backgroundColor: customTheme.colors.background_secondary,
        paddingTop: '100px',
      }}
    >
      <Container id='projects' className={classes.container}>
        <SectionTitle title={'projects'} />
        <BigProject
          title='Gub'
          description='Gaming news delivered straight to gamers by a gamer! It shows aggregated news articles from IGN, Polygon, Eurogamer, GameInformer, GamesRadar and Eurogamer.'
          primaryImage='http://juanchavez.me/assets/sc1.png'
          secondaryImage='http://juanchavez.me/assets/sc2.png'
          techStack={[
            'React Native',
            'Kubernetes',
            'Nodejs',
            'Microsoft Azure',
          ]}
          githubLink=''
          websiteLink='https://gub.app'
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
          githubLink='https://github.com/je-chavez/Ventura'
          websiteLink=''
        />

        <Grid
          justify='center'
          alignItems='center'
          className={classes.grid}
          style={{ paddingTop: '100px' }}
          container
          direction='row'
          spacing={5}
        >
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
              techStack={['Nodejs', 'Express', 'MongoDB']}
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
