import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(10),

  },

  text1: {
    fontSize: 40,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
	    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  }
}));

function App() {
  const [value, setValue] = React.useState("Heading");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  

  const styledClasses = useStyle();
  return (
    <div className="App" >
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="text" color="primary">File</Button>
          
          <Button onClick={handleClick} variant="text" color="primary">Edit</Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}>
            <MenuItem>Options:</MenuItem>
            <MenuItem onClick={handleOpen}>Update</MenuItem>
            <MenuItem>something</MenuItem>

          </Menu>
          <Dialog aria-labelledby="About" open={open} onClose={handleClose}>
            <DialogTitle>Update:</DialogTitle>
            <DialogContent>
              <Typography>Type your message:</Typography>
              <br></br>
              <TextField placeholder="" 
                         multiline
                         rowsMax="4"
                          value={value}
                          onChange={handleChange}></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
          
        </Toolbar>
      </AppBar>

      <Box width={1} padding={5} className={styledClasses.box1}>
      <Typography className={styledClasses.text1}>{value}</Typography>
        
      </Box>
    </div>
  ); 
}

export default App;