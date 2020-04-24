import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import { Chart } from 'react-charts'


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

  const data = React.useMemo(
    () => [
      {
        label: 'data1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'data2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]
  )
  const series = React.useMemo(
    () => ({
      showPoints: true
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

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
        <Button color="inherit">Edit</Button>
          
        </Toolbar>
      </AppBar>
      <div>
        <>
        
        {/* <Box width={1/2} padding={5} 
        paddingBottom={10}  
        className={ styledClasses.box1 }> */}
          <Box
            style={{
              background: 'rgba(0, 27, 45, 0.9)',
              padding: '.5rem',
              borderRadius: '5px'
            }}
          >
            <Chart data={data} series={series} axes={axes} tooltip />
        </Box>
      <br />
        {/* </Box>
         */}

        </>
      </div>
    
    </div>
  ); 
}


export default App;
