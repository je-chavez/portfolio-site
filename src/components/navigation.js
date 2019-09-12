import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import customTheme from '../theme/theme.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Container,
  Slide
} from '@material-ui/core';
import { Menu, ChevronLeft, ChevronRight } from '@material-ui/icons';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });
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
    width: drawerWidth,
    backgroundColor: customTheme.colors.background,
    color: customTheme.colors.font_onBackground
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  chevronColor: {
    color: customTheme.colors.font_onBackground
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
    backgroundColor: customTheme.colors.background
  },
  anchor: {
    color: 'inherit',
    textDecoration: 'none'
  },
  logo: {
    '&:hover': {
      filter: 'brightness(2)'
    }
  },
  listItem: {
    '&:hover': {
      backgroundColor: 'inherit',
      color: customTheme.colors.primary
    }
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
            <ChevronLeft className={classes.chevronColor} />
          ) : (
            <ChevronRight className={classes.chevronColor} />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key='About'>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem button key='Projects'>
          <ListItemText primary='Projects' />
        </ListItem>
        <ListItem button key='Contact'>
          <ListItemText primary='Contact' />
        </ListItem>
        <ListItem button key='Resume'>
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
                  <Menu />
                </IconButton>
              ) : null}
            </div>
            <AnchorLink className={[classes.anchor]} href='#home' offset={150}>
              <img className={classes.logo} src='/assets/favicon.ico' />
            </AnchorLink>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <AnchorLink className={classes.anchor} href='#about' offset={150}>
                <ListItem className={classes.listItem} button key='About'>
                  <ListItemText primary='About' />
                </ListItem>
              </AnchorLink>
              <AnchorLink
                className={classes.anchor}
                href='#projects'
                offset={150}>
                <ListItem className={classes.listItem} button key='Projects'>
                  <ListItemText primary='Projects' />
                </ListItem>
              </AnchorLink>{' '}
              <AnchorLink
                className={classes.anchor}
                href='#contact'
                offset={150}>
                <ListItem className={classes.listItem} button key='Contact'>
                  <ListItemText primary='Contact' />
                </ListItem>
              </AnchorLink>{' '}
              <a className={classes.anchor} href='/resume.pdf' target='_blank'>
                <ListItem className={classes.listItem} button key='Resume'>
                  <ListItemText primary='Resume' />
                </ListItem>
              </a>
            </div>
          </Toolbar>
          {renderDrawer}
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container className={classes.container}>
        {props.containers.map((value, index) => {
          return <div id={index}>{value()}</div>;
        })}
      </Container>
    </React.Fragment>
  );
}
