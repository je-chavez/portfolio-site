import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Divider, Grid } from '@material-ui/core';
import SmallProject from '../components/projects/smallProject';
import BigProject from '../components/projects/bigProject';
import SectionTitle from '../components/shared/sectionTitle';
import ProjectCard from '../components/projects/projectCard';

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: customTheme.colors.background_secondary,
    paddingTop: '50px',
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
      }}
    >
      <Container id='projects' className={classes.container}>
        <SectionTitle title={'projects'} />
        <ProjectCard
          title='Gub'
          description='Gaming news delivered straight to gamers by a gamer! It shows aggregated news articles from IGN, Polygon, Eurogamer, GameInformer, GamesRadar and Eurogamer.'
          techStack={[
            'React Native',
            'Kubernetes',
            'Nodejs',
            'Microsoft Azure',
          ]}
          ghLink=''
          websiteLink='https://gub.app'
          previewImage='http://juanchavez.me/assets/sc1.png'
        />
      </Container>
    </div>
  );
}
