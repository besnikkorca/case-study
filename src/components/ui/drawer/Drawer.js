import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import DrawerMUI from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { DrawerItems } from './constants';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

const Drawer = (props) => {
  const { open, onDrawerClose } = props

  const classes = useStyles();

  const historyPush = (pathname) =>
  props.history.push({
    pathname,
  })

  return (
    <DrawerMUI
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onDrawerClose}>
        <ChevronLeftIcon />
        </IconButton>
      </div>
      <br />
      <List>
        {DrawerItems.map(({ id, label, icon }) => (
          <ListItem button onClick={() => historyPush(`/${id}`)} key={id}>
            {icon}
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </DrawerMUI>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default withRouter(Drawer)
