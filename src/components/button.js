import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';

const styles = makeStyles({
  button: {
    backgroundColor: customTheme.colors.primary,
    '&:hover': {
        backgroundColor: customTheme.colors.primary
    }
  }
});

export default function Button(props) {
  const classes = styles();
  const {text} = props;

  return <Button className={classes.button}>{text}</Button>;
}
