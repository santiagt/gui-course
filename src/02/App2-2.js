import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  
  const handleChange = () => {
    setValue("You have changed the text");
  }
  
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
          <Button onClick={handleOpen} variant="text" color="primary">About</Button>
          <Dialog aria-labelledby="About" open={open} onClose={handleClose}>
            <DialogTitle>About:</DialogTitle>
            <DialogContent>
              <Typography>This is an exercise made with React and Material-Ui</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Button onClick={handleChange} variant="text" color="primary">Update</Button>
          
        </Toolbar>
      </AppBar>

      <Box width={1} padding={5} className={styledClasses.box1}>
      <Typography className={styledClasses.text1}>{value}</Typography>
        
      </Box>
    </div>
  ); 
}

export default App;