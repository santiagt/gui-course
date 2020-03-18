import React from 'react';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';import './App.css';
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
    color: props => props.value,
  }
}));

function App() {
  const [value, setValue] = React.useState('blue');

  const handleChange = event => {
    setValue(event.target.value);
  }
  
  const styledClasses = useStyle({color: value});
  return (
    <div className="App" style={{height:900, width:700}}>
      <Box border={1} width={1/2} padding={3}>
        <Typography style={{color: value}} className={styledClasses.text1}>Colours</Typography>
        <br></br> 
        <Box border={1} width= {1/2} className={styledClasses.box1}>
        <FormControl component="fieldset">
          <RadioGroup name="color" value={value} onChange={handleChange}>
            <FormControlLabel value='blue' control={<Radio />} label="First Color" />
            <FormControlLabel value='red' control={<Radio />} label="Second Color" />
            <FormControlLabel value='yellow' control={<Radio />} label="Third Color" />
          </RadioGroup>
        </FormControl>
        </Box>
      </Box>
    </div>
  ); 
}

export default App;