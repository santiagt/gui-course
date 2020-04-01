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
    marginLeft: theme.spacing(10),
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

  const headingDragStart = (event) => {
    event.dataTransfer.setData("text/plain", heading);
    event.dataTransfer.setData("text/html", "<h2>"+ heading +"<h2>");
    event.dataTransfer.dropEffect = "copy";
  }

  const headingOnDrop = (event) => {
    let items = event.dataTransfer.items;
    for  (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.kind === 'string') {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        setHeading(data);
        return;
      }
    }
    event.preventDefault();
  }

  const headingDragEnter = (event) => {
    let items = event.dataTransfer.items;
    for  (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.kind === 'string') {
        event.preventDefault();
        return;
      }
    }
  }

  

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
      <div contentEditable={true}>
        <Typography id="heading" variant="h2" align="center">{heading}</Typography> 
        
        
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
          <img src={bythesea} alt="suomenlinna"
               style={{height: 600}}
               id="pic"></img>
               <br></br>
          <Typography variant="caption" marginTop={40}>{caption}</Typography>
        </Box>
        <br></br>
        
      </div>
      
    </div>
  ); 
}

export default App;