import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
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
  const [undoStack, setUndoStack] = React.useState([]);
  const [redoStack, setRedoStack] = React.useState([]);


  const headingDragStart = (event) => {
    event.dataTransfer.setData("text/plain", heading);
    event.dataTransfer.setData("text/html", "<h2>"+ heading +"<h2>");
    event.dataTransfer.dropEffect = "copy";
  }

  const captDragStart = (event) => {
    event.dataTransfer.setData("text/plain", caption);
    event.dataTransfer.setData("text/html", "<h6>"+ caption +"<h6>");
    event.dataTransfer.dropEffect = "copy";
  }

  const headingOnDrop = (event) => {
    let items = event.dataTransfer.items;
    for  (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.kind === 'string') {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        setUndoStack(undoStack.concat([{caption: caption,
                                        heading: heading}]));
        setHeading(data);
        return;
      }
    }
    event.preventDefault();
  }

  const captaOnDrop = (event) => {
    let items = event.dataTransfer.items;
    for  (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.kind === 'string') {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        setUndoStack(undoStack.concat([{caption: caption,
                                        heading: heading}]));
        setCaption(data);
        return; 
      }
    }
    event.preventDefault();
  }

  const textDragEnter = (event) => {
    let items = event.dataTransfer.items;
    for  (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.kind === 'string') {
        event.preventDefault();
        return;
      }
    }
  }

  const dragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  const imageDragStart = (event) => {
    event.dataTransfer.setData("image/jpeg", event.target.src);
    event.dataTransfer.dropEffect = "copy";
  }

  const imageOnDrop = (event) => {
    let file = event.dataTransfer.files[0];
    if (file) {
      let reader = new FileReader()
      reader.onloadend = function(evt) {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }  

  const phPaste = (event) => {
    let paste = event.clipboardData.getData('Text');
    setUndoStack(undoStack.concat([{caption: caption,
                                    heading: heading}]));
    setHeading(paste);
    event.preventDefault();
  }

  const pcPaste = (event) => {
    let paste = event.clipboardData.getData('Text');
    setUndoStack(undoStack.concat([{caption: caption,
                                    heading: heading}]));
    setCaption(paste);
    event.preventDefault();
  }

  const pCopy = (event) => {
    event.clipboardData.setData('text/plain', heading + " " + caption);
    event.preventDefault();
  }

  const pUndo = (event) => {
    let prev = undoStack[undoStack.length - 1];
    setRedoStack(redoStack.concat({heading: heading,
                                   caption: caption}));
    setHeading(prev.heading);
    setCaption(prev.caption);
    setUndoStack(undoStack.slice(0, undoStack.length - 1));
  }

  const pRedo = (event) => {
    let prev = redoStack[redoStack.length - 1];
    setUndoStack(undoStack.concat({heading: heading,
                                   caption: caption}));
    setHeading(prev.heading);
    setCaption(prev.caption);
    setRedoStack(redoStack.slice(0, redoStack.length - 1));
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
          <Button color="inherit" onClick={pUndo}>Undo</Button>
          <Button color="inherit" onClick={pRedo}>Redo</Button>
        </Toolbar>
      </AppBar>
      <div contentEditable={true} onCopy={pCopy}>
        <Typography id="heading"
                    variant="h2"
                    align="center"
                    onDragStart={headingDragStart}
                    onDrop={headingOnDrop}
                    onDragEnter={textDragEnter}
                    onDragOver={dragOver}
                    onPaste={phPaste}
                    draggable={true}>{heading}</Typography> 
        
        
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
          <img src={image}
               alt="suomenlinna"
               style={{height: 600}}
               id="pic"
               onDragStart={imageDragStart}
               onDragOver={dragOver}
               onDrop={imageOnDrop}
               draggable={true}></img>
          <br></br>
          <Box width="55%" border={1} padding={1} marginTop={2}>
        
          <Typography variant="caption"
                      marginTop={40}
                      onDragStart={captDragStart}
                      onDrop={captaOnDrop}
                      onDragEnter={textDragEnter}
                      onPaste={pcPaste}
                      onDragOver={dragOver}
                      draggable={true}>{caption}</Typography>
          </Box>
        </Box>
        <br></br>
        
      </div>
      
    </div>
  ); 
}

export default App;