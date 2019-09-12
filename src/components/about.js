import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';
import { Container, Typography, Paper, Divider } from '@material-ui/core';

const styles = makeStyles({
  paper: {
    backgroundColor: customTheme.colors.surface
  },
  container: {
    padding: '20px'
  },
  sectionTitle: {
    color: customTheme.colors.font_onSurface,
    fontWeight: 400,
    padding: '20px'
  },
  image: {
    maxWidth: '100%',
    minHeight: '200px',
    objectFit: 'cover'
  },
  ul: {
    columnCount: 2
  }
});

export default function About(props) {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <div>
          <img
            className={classes.image}
            src='https://lh3.googleusercontent.com/dbnuE9voNZCTetr0Q0IVLVaxM1YX1fbOH5hk5hU9HJ8r6csxaaD3agu0V2-po_lIRZ255F64w47Egdas4Sfip4uj9j0Uxxs-MG7RfE97lcDOzYTjIZQ-mBShHl6PEcsavWFbcOEtjMpERh5ML94u38LxJJAMc_3o3dZK0AMHCp85oyOxvfIRgZGHq2OZQguMqgPgUnWPAyBt9PO4peN9V0mB6wcjRjdrxrNRbW_9_IvbyxUAIs1lNMZgB_zp_nzqSxOukIHy0woX7ZoDIf_Zsj5WlvKaoSoMGyC_rqS978t12LYOd6osCwNK9pi2w6Kj3lNhiIahc4EHd5Y08RkPiDeolxNePYQwY63e6WHtNzQRFKO6nHYvNrkQVykRL6thHYBV8PEggyssy63sLnZfRElSWlIIn3P5F5P8nMD6H0MUfXOV9bCUX015rIMz1F-aQMfuugPeqELnIfUbJtfrZ2XBrqZuqNE9zwJmlyu8pEzX3peFer836D-A7EUG8Wl4gcW_uGyqfra1tRFPh5f-d7Bx0nRhvrloRUVarAl6v-a4hEY1-B8lGPmgWEtiLr-v6bCtklG-key2SenpoyEZwMR73fiseNOnCYMWr66GQ95hWGQZhLXFd-ega6LJ0Km7XbO-DqLobEMASMBoI6wXiepfGIgeIXLWNk0rqZ0_De5Fp9BApAMHgQ=w2048-h499-no'
          />
        </div>
        {/* <Typography variant='h2' className={classes.sectionTitle}>
          About
        </Typography>
        <Divider /> */}
        <Typography variant='h4' className={classes.sectionTitle}>
          Who I Am
        </Typography>
        <Typography variant='body1' className={classes.sectionTitle}>
          Hi! I'm a Full-Stack Developer based in the Silicon Valley. I'm an
          entrepreneur at heart, and love coming up with and working on new
          ideas! My main focus as of recent has been full-stack mobile
          development, but I'm always eager to learn about new technologies.{' '}
        </Typography>
        <Divider />
        <Typography variant='h4' className={classes.sectionTitle}>
          What I've Been Learning
        </Typography>
        <Typography variant='body1' className={classes.sectionTitle}>
          Recently, I've been teaching myself more about scalable backend
          technologies, as well as cross-platform mobile development. Subjects
          include:
          <ul className={classes.ul}>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Node.js</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>Xamarin Forms</li>
          </ul>
        </Typography>
      </Paper>
    </Container>
  );
}
