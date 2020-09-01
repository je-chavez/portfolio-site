import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import customTheme from '../theme/theme';

const styles = makeStyles((theme) => ({
  outerBar: {
    width: '100%',
    backgroundColor: '#91c9bf',
    marginTop: '10px',
    borderRadius: '10px',
  },
  innerBar: {
    backgroundColor: customTheme.colors.primary,
    textAlign: 'left',
    padding: '5px',
    paddingLeft: '20px',
    borderRadius: '10px',
    fontFamily: customTheme.fontStyle,
    color: '#fff',
    fontSize: '18px',
  },
}));

export default function SkillBar(props) {
  const { skillName, percentage } = props;
  const classes = styles();
  return (
    <div className={classes.outerBar}>
      <div
        className={classes.innerBar}
        style={{
          width: percentage,
        }}
      >
        {skillName}
      </div>
    </div>
  );
}
