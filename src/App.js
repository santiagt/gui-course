import React, {useRef, useEffect} from 'react';
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
import { makeStyles, TextField } from '@material-ui/core';

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
  const [nodes, setNodes] = React.useState(5);
  const [weights, setWeights] = React.useState([4,7,5,3,7,3,9,8,1,2]);

  const canvasRef = React.useRef(null);
  const WIDTH = 800;
  const HEIGHT = 600;
  
  const cities = [];


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeNodes = (event) => {
    setNodes(event.target.value);
    const newNodes = event.target.value; 
    const newWeights = [];
    for (let i = 1; i < newNodes; i++) {
      for (let j = i+1; j <= newNodes; j++) {
      newWeights.push(Math.floor((Math.random() * 10) + 1));
      }
    }
    setWeights(newWeights);
  }

  const changeWeights = index => event => {
    setWeights(weights.slice(0, index).concat(event.target.value).concat(weights.slice((index+1))));
  }

  const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const setCities = () => {
    for (let i = 0; i < nodes; i++) {
      cities.push({ name: (i + 1),
                    locationX: getRandom(700, 100), 
                    locationY: getRandom(500, 100),
      });
    }
  }
  
  const nodesNumArr = [];
  for (let i = 3; i < 16; i++) {
    nodesNumArr.push(<MenuItem value={i}>{i}</MenuItem>);
  }

  const weightsArr = [];
  for (let i = 1; i < 11; i++) {
    weightsArr.push(<MenuItem value={i}>{i}</MenuItem>);
  }
  
  const nodesWeights = [];
  let c = 0;
  for (let i = 1; i < nodes; i++) {
    for (let j = i+1; j <= nodes; j++) {
      nodesWeights.push(<Grid container>
                          <Grid xs={2}></Grid>
                          <Grid xs={10}>
                          <InputLabel id={i+"to"+j}>{"From "+i+" to "+j}</InputLabel>
                            <Select labelId={i+"to"+j}
                                    value={weights[c]}
                                    onChange={changeWeights(c)}>
                              {weightsArr}
                            </Select>
                          </Grid>
                        </Grid>);
      c++;
    }
  }
  useEffect(() => {
		redrawCanvas();
	});
	
	const redrawCanvas = () => {
    let ctx = canvasRef.current.getContext('2d');
    setCities();


  }

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
          <Typography variant="h6" noWrap>
            / Settings 
          </Typography>
          </IconButton>
          
        </div>
        <Divider />
        <div>
         <List>
         <Typography variant="h6" noWrap>
           Number of Nodes 
          </Typography>
          <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={4}>
              <Select value={nodes}
                      onChange={changeNodes}>
                {nodesNumArr}
              </Select>
            </Grid>
          </Grid>
          <br></br>
           <Typography variant="h6" noWrap>
             Weight Between Nodes
           </Typography>
           <br></br>
            {nodesWeights}
         </List>
        </div>
      </Drawer>
      <div>
        
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
         	<canvas width={WIDTH} height={HEIGHT} onClick={handleDrawerOpen} ref={canvasRef} />
        </Box>
      </div>
    </div>
  ); 
}


export default App;
