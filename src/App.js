import React from 'react';
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
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltip = props => {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // mutating props directly is against react's conventions
    const newPayload = [
      {
        value: props.payload[0].payload.pv + props.payload[0].payload.sym,
      },
    ];
    // we render the default, but with our overridden payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  }

  // we just render the default
  return <DefaultTooltipContent {...props} />;
};

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

//sample from the coins.json file:
//{ 
//   "CAD": {
//     "symbol": "CA$",
//     "name": "Canadian Dollar",
//     "symbol_native": "$",
//     "decimal_digits": 2,
//     "rounding": 10,
//     "code": "CAD",
//     "name_plural": "Canadian dollars"
// },
// "EUR": {
//     "symbol": "€",
//     "name": "Euro",
//     "symbol_native": "€",
//     "decimal_digits": 2,
//     "rounding": 2,
//     "code": "EUR",
//     "name_plural": "euros"
// },
// }


function App() {
  const [currency, setCurrency] = React.useState('EUR');
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  let today = new Date();
  let monthYear = "."+today.getMonth()+"."+today.getFullYear();
  
  let currArr = [];
  Object.keys(coins).forEach((key) => {
    currArr.push(coins[key]);
  });

  const data = [
    {name: ((parseInt(today.getDate())-4) + monthYear), pv: (Math.random() * coins[currency].rounding).toFixed(2), sym: coins[currency].symbol_native},
    {name: ((parseInt(today.getDate())-3) + monthYear), pv: (Math.random() * coins[currency].rounding).toFixed(2), sym: coins[currency].symbol_native},
    {name: ((parseInt(today.getDate())-2) + monthYear), pv: (Math.random() * coins[currency].rounding).toFixed(2), sym: coins[currency].symbol_native},
    {name: ((parseInt(today.getDate())-1) + monthYear), pv: (Math.random() * coins[currency].rounding).toFixed(2), sym: coins[currency].symbol_native},
    {name: (today.getDate() + monthYear), pv: (Math.random() * coins[currency].rounding).toFixed(2), sym: coins[currency].symbol_native},
  ];
  
  

  const menuItems = [];
  for (const [i, coin] of currArr.entries()) {
    
    menuItems.push(<MenuItem value={coin.code}>{coin.name}</MenuItem>);
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
          <Tooltip content={CustomTooltip}/>
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
                    {menuItems}
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
