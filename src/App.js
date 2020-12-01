import React, { useEffect, useState, useMemo } from 'react'
import clsx from 'clsx';

import { AppContext } from './libs/contextLib'
import Routes from './Routes'
import { Link as RLink } from 'react-router-dom'
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { Modal, Toolbar, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Link from '@material-ui/core/Link';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';

import ModalObj from './components/ModalObj'
import UserGuide from './components/UserGuide'

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#6699cc',
      color: 'white'
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      boxShadow: 'none'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#6699cc',
    color: 'white' 
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1, 3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.90),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  linkStyle: {
    color: 'white',
    '&:hover': {
      color: 'white'
    },
  },
  logo: {
    width: '107px',
    height: '60px',
    margin: 'auto',
  },
  toolbarRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

function App(props) {

  const container =  undefined
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userId, setUserId] = useState(null)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [openUserGuide, setOpenUserGuide] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    window.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid.toLowerCase())
        userHasAuthenticated(true)
      }
      setIsAuthenticating(false)
    })
  }

  async function handleLogout() {
    window.firebase.auth().signOut()
    userHasAuthenticated(false);
  }

  const getContextValue = useMemo(() => {
    return { isAuthenticated, userId }
  }, [isAuthenticated, userId])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeUserGuide = () => {
    setOpenUserGuide(false)
  }

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <List>
        <ListItem>
          <img 
            className={classes.logo}
            src={require('./assets/images/genie24-app-logo-nobg.png')}
          />
        </ListItem>
        <ListItem button>
              <ListItemIcon><AddToPhotosTwoToneIcon /></ListItemIcon>
            <RLink to='/' className={classes.linkStyle}>
              <ListItemText primary='Live Products' />
            </RLink>
        </ListItem>
        {/* <ListItem button>
            <ListItemIcon><DynamicFeedTwoToneIcon /></ListItemIcon>
            <RLink to="/stage" className={classes.linkStyle}>
              <ListItemText primary='Go Live' />
            </RLink>
        </ListItem> */}
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon><LockTwoToneIcon /></ListItemIcon>
          <ListItemText primary='Signout' />
        </ListItem>
      </List>
    </div>
  );

  return (
    !isAuthenticating && (
    <div className={classes.root}>
      {isAuthenticated && (
        <>
          {/* <AppBar position="fixed" className={classes.appBar} color="transparent">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Responsive drawer
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar> */}

          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}>
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </>
      )}

      <main className={classes.content}>
        {isAuthenticated && (
          <Toolbar className={classes.toolbar}>
            <div className={classes.toolbarRight}>
              <Button color="inherit" onClick={() => setOpenUserGuide(true)}>User Guide</Button>
            </div>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
          </Toolbar>
        )}
        <AppContext.Provider
          value={getContextValue}>
          <Routes/>
        </AppContext.Provider>
      </main>
      
      <ModalObj
        openModal={openUserGuide}
        closeModal={closeUserGuide}
        width={600}
      >
        <UserGuide />
      </ModalObj>

    </div>
    )
  )
}

export default App