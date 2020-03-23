import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(10),
    height: 200,
    backgroundColor: props => props.value,

  },

  slider: {
    margin: 20,
  },

  bg: {
    backgroundColor: props => props.value, 
  }
}));

function App() {
  const [red, setRed] = React.useState(40);
  const [green, setGreen] = React.useState(60);
  const [blue, setBlue] = React.useState(70);
  const [value, setValue] = React.useState('rgb(40, 60, 70)');

  const handleChangeR = (event, newValue) => {
    setRed(newValue);
    setValue(`rgb(${red}, ${green}, ${blue})`);
    console.log(newValue);
    console.log(value);
  };
  
  const handleChangeG = (event, newValue) => {
    setGreen(newValue)
    setValue(`rgb(${red}, ${green}, ${blue})`);
    
  }

  const handleChangeB = (event, newValue) => {
    setBlue(newValue)
    setValue(`rgb(${red}, ${green}, ${blue})`);
    
  }

  const styledClasses = useStyle({backgroundColor: value});
  return (
    <div className="App" >
      <AppBar position="static">
        <Toolbar variant="dense">
        </Toolbar>
      </AppBar>
      <div style={{backgroundColor: value}} className={styledClasses.bg}>
        <br></br>
        <Box width={220} border={1} padding={5} paddingBottom={10} style={{backgroundColor: value}} className={ styledClasses.box1 }>
          <Slider
              onChange={handleChangeR}
              className={styledClasses.slider}
              orientation="vertical"
              min={0}
              max={255}
              value={red}
              defaultValue={40}
          />
            <Slider
              className={styledClasses.slider}
              onChange={handleChangeG}
              orientation="vertical"
              min={0}
              max={255}
              vaule={green}
              defaultValue={60}
            />
            <Slider
              className={styledClasses.slider}
              onChange={handleChangeB}
              orientation="vertical"
              min={0}
              max={255}
              value={blue}
              defaultValue={70}
            />
          
        </Box>

      </div>
      
    </div>
  ); 
}

export default App;