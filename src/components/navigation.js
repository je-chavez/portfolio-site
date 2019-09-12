import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import customTheme from '../theme/theme.js';

//For drawer
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

//Appbar buttons
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: customTheme.colors.background
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    height: '300vh',
    backgroundColor: '#eaeaea'
  }
}));

export default function ResponsiveNavigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const renderDrawer = (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key='About'>
          <ListItemIcon>
            <InfoRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem button key='Projects'>
          <ListItemIcon>
            <ListAltRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItem>
        <ListItem button key='Contact'>
          <ListItemIcon>
            <ContactMailRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
        <ListItem button key='Resume'>
          <ListItemIcon>
            <DescriptionRoundedIcon />
          </ListItemIcon>
          <ListItemText primary='Resume' />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}>
          <Toolbar>
            <div className={classes.sectionMobile}>
              {!open ? (
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  onClick={handleDrawerOpen}
                  color='inherit'
                  aria-label='open drawer'>
                  <MenuIcon />
                </IconButton>
              ) : null}
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <ListItem button key='About'>
                <ListItemText primary='About' />
              </ListItem>
              <ListItem button key='Contact'>
                <ListItemText primary='Contact' />
              </ListItem>
              <ListItem button key='Projects'>
                <ListItemText primary='Projects' />
              </ListItem>
              <ListItem button key='Resume'>
                <ListItemText primary='Resume' />
              </ListItem>
            </div>
          </Toolbar>
          {renderDrawer}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container className={classes.container}></Container>
    </React.Fragment>
  );
}
