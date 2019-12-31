import React from 'react';
//style imports for all material ui 
import MenuList from './MenuList.jsx';
import Login from './Login.jsx'
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from './images/Logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
    margin: 'auto',
    maxWidth: '170px',
    maxHeight: '170px',
  },
}));

const NavBar = ({ changeView }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* menu button */}
          <MenuList changeView={changeView}/>
          {/* app title */}
          <img className={classes.img} src={Logo} alt="Logo" />
          {/* <Typography variant="h5" className={classes.title}>  Node.LA </Typography> */}
          {/* Login button */}
          <div variant="contained" color="secondary"> 
            <Login />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;