import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';

const styles = makeStyles({
    mainDivFooter: {
        height: '150px',
        width: '100%',
        backgroundColor: customTheme.colors.background
    }
});

export default function Footer(props) {
  const classes = styles();

  return (
    <div className={classes.mainDivFooter}>
    </div>
  );
}
