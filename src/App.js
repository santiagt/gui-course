import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(10),
    height: "75%",
  },

  select: {
    margin: 5,
    marginLeft: 30,
    
  },
}));

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const styledClasses = useStyle();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} aria-label="menu">
            <MenuIcon />
         </IconButton>
         <Typography variant="h6">Edit Nodes Settings</Typography> 
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        </List>
      </Drawer>
      <div>
        
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
        </Box>
      </div>
    </div>
  ); 
}


export default App;
