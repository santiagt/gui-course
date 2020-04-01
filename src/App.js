import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ListItemText } from '@material-ui/core';
import bythesea from './bythesea.jpg';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(5),
    height: "75%",
  },

  buttons: {
    margin: 5,
    
  },
}));

function App() {
  const [heading, setHeading] = React.useState(["Heading"]);
  const [image, setImage] = React.useState(bythesea);
  const [caption, setCaption] = React.useState("Caption")
 

  const styledClasses = useStyle();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">File</Button>
          <Button color="inherit" >Edit</Button>
          <Button color="inherit" >Undo</Button>
          <Button color="inherit" >Redo</Button>
        </Toolbar>
      </AppBar>
      <div > 
        
        
        <Box width={1/3} border={1} padding={5} 
        paddingBottom={10} 
        className={ styledClasses.box1 }>
          

        </Box>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs>
            
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
      
    </div>
  ); 
}

export default App;