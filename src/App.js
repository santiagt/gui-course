import React, { useEffect } from 'react';
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
import { makeStyles } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import coins from './coins.json';

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
  const data = [
    {name: 'Page A', pv: 2400},
    {name: 'Page B', pv: 1398},
    {name: 'Page C', pv: 20000},
    {name: 'Page D', pv: 3908},
    {name: 'Page E', pv: 4800},
    {name: 'Page F', pv: 3800},
    {name: 'Page G', pv: 4300},
  ];
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  
  
  
  let currArr = [];
  Object.keys(coins).forEach((key) => {
    currArr.push(coins[key]);
  });
  
}
// useEffect(() => {

// })
  const styledClasses = useStyle();
  
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
         </IconButton>
        <Button color="inherit">File</Button>
          
        </Toolbar>
      </AppBar>
      <div>
        
        <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }>
          <Typography variant="h5" align='center'>Exchange rate (USD)</Typography>
          <br></br>
          
          <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 4}}/>
          </LineChart>
          <br></br>
          <div>
            <div>
            <Grid container spacing={3}>
              <Grid item xs={5}>
              </Grid>
              <Grid item xs={7}>
                <FormControl className={styledClasses.select}>
                  <InputLabel id="currency">Currency</InputLabel>
                  <Select
                    labelId="currency"
                    id="select-currency"
                    value={currency}
                    onChange={handleChange}
                  >

                    <MenuItem value={"EUR"}>Euros</MenuItem>
                    <MenuItem value={20}>Sterling Pounds</MenuItem>
                    <MenuItem value={30}>Swedish Crown</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
              </Grid>
            </div>
          </div>
        </Box>
      </div>
    </div>
  ); 
}


export default App;
