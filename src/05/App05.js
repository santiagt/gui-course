import React, { useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CompactPicker } from 'react-color';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(10),
    height: "75%",
  },

  buttons: {
    margin: 5,
    
  },
}));
const StyledMenu = withStyles({
  paper: {
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function App() {
  const [canvasSize, setCanvasSize] = React.useState([window.innerWidth, window.innerHeight]);
  const [color1, setColor1] = React.useState("#FF0000");
  const [color2, setColor2] = React.useState("#00FF00");
  const [color3, setColor3] = React.useState("#0000FF");
  const [label1, setLabel1] = React.useState("Set 1");
  const [label2, setLabel2] = React.useState("Set 2");
  const [label3, setLabel3] = React.useState("Set 3");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openL, setOpenL] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenL = () => {
    setOpenL(true);
  };

  const handleDialogCloseL = () => {
    setOpenL(false);
  }
  const handleClickOpenC = () => {
    setOpenC(true);
  };

  const handleDialogCloseC = () => {
    setOpenC(false);
  }

  const handleLabel1Change = (event) => {
    setLabel1(event.target.value);
  }
  const handleLabel2Change = (event) => {
    setLabel2(event.target.value);
  }
  const handleLabel3Change = (event) => {
    setLabel3(event.target.value);
  }

  const handleColor1 = (color) => {
    setColor1(color.hex);
  }
  const handleColor2 = (color) => {
    setColor2(color.hex);
  }
  const handleColor3 = (color) => {
    setColor3(color.hex);
  }

  const canvasRef = useRef(null);

  window.onresize = (event) => {
    setCanvasSize([window.innerWidth, window.innerHeight]);
  }

  

  const drawCircle = (ctx, color, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, Math.PI*2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
  }
  const writeLabel = (ctx, label, x, y) => {
    ctx.fillStyle = "black";
    ctx.fillText(label, x, y);
  }

useEffect(() => {
  let ctx = canvasRef.current.getContext('2d');

  drawCircle(ctx, color1, 360, 100);
  drawCircle(ctx, color2, 300, 200);
  drawCircle(ctx, color3, 425, 200);
  ctx.globalAlpha = "1";
  ctx.globalCompositeOperation = "lighten";
  drawCircle(ctx, color1, 360, 100);
  drawCircle(ctx, color2, 300, 200);
  drawCircle(ctx, color3, 425, 200);
  

  ctx.globalCompositeOperation = "normal";
  ctx.font = "20px Georgia"
  writeLabel(ctx, label1, (345 - (label1.length * 2)), 70);
  writeLabel(ctx, label2, (255 - (label2.length * 2)), 240);
  writeLabel(ctx, label3, (440 - (label3.length * 2)), 240);

  ctx.font = "15px Georgia"
  let label12 = (label1 + " U " + label2);
  let label23 = (label2 + " U " + label3);
  let label13 = (label1 + " U " + label3);
  let label123 = (label1 + " U " + label2 + " U " + label3);

  writeLabel(ctx, label12, (270 - label12.length), 125);
  writeLabel(ctx, label23, (335 - label23.length), 220);
  writeLabel(ctx, label13, (380 - label13.length ), 135);
  writeLabel(ctx, label123, (315 - label123.length), 180);
  

  
})
  
  const styledClasses = useStyle();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">File</Button>
          <Button color="inherit" onClick={handleClick}>Edit</Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
              <StyledMenuItem onClick={handleClickOpenL}>
                <ListItemIcon>
                  <LocalOfferIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Change Labels" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickOpenC}>
              <ListItemIcon>
                <ColorLensIcon fontSize="small"/>
              </ListItemIcon>
              <ListItemText primary="Change Colors" />
            </StyledMenuItem>

          </StyledMenu>
        </Toolbar>
      </AppBar>
      <div>
        <Dialog open={openL} onClose={handleDialogCloseL} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sets Labels</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="set1"
              label="Set 1"
              value={label1}
              onChange={handleLabel1Change}
              fullWidth
            />
            <TextField
              margin="dense"
              id="set2"
              label="Set 2"
              value={label2}
              onChange={handleLabel2Change}
              fullWidth
            />
            <TextField
              margin="dense"
              id="set3"
              label="Set 3"
              value={label3}
              onChange={handleLabel3Change}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCloseL} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openC} onClose={handleDialogCloseC} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sets Colors</DialogTitle>
          <DialogContent>
            <Typography>Set 1 Color</Typography>
            <CompactPicker color={color1} onChange={handleColor1}></CompactPicker>
            <Typography>Set 2 Color</Typography>
            <CompactPicker color={color2} onChange={handleColor2}></CompactPicker>
            <Typography>Set 3 Color</Typography>
            <CompactPicker color={color3} onChange={handleColor3}></CompactPicker>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogCloseC} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
          
        </Box>
        <canvas width={canvasSize[0]}
                height={canvasSize[1]}
                ref={canvasRef}
                />

      </div>
      
    </div>
  ); 
}

export default App;
