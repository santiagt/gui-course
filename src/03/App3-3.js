import React from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Switch, FormControlLabel } from '@material-ui/core';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(15),
    height: "75%",
  },

  buttons: {
    margin: 10,
    
  },
}));

function App() {
  const [names, setNames] = React.useState([{name: "Santiago", student: true}]);
  const [student, setStudent] = React.useState(true);
  const [name, setName] = React.useState(""); 

  const add = () => {
    setNames(names.concat({name: name, student: student}));
  }

  const handleChangeSwich = (event) => {
    setStudent(event.target.checked);
  }

  const handleChanegName = (event) => {
    setName(event.target.value);
  }

  const styledClasses = useStyle();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        </Toolbar>
      </AppBar>
      <div> 
        <br></br>
        <Box width={1/3} border={1} padding={5} 
        paddingBottom={10} 
        className={ styledClasses.box1 }>
          <Grid container spacing={2} className={styledClasses.buttons}>
          <TextField label="Name" onChange={handleChanegName} value={name}>
          </TextField>
          </Grid>
        
          <Grid container spacing={3} className={styledClasses.buttons}>
          <Grid item xs>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked={true}
                  color="primary"
                  vaule="student"
                  onChange={handleChangeSwich}
                />
              }
              label="Student"
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained"
                    color="primary"
                    className={ styledClasses.buttons } 
                    onClick={add}
                    disabled={name === ""}>Add</Button>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
          
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Student</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {names.map((name) => (
            <TableRow key={name.name}>
              <TableCell component="th" scope="row">
                {name.name}
              </TableCell>
              <TableCell align="right">{(name.student) ? "Is a student" : "Not a student"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
          
        </Box>
      </div>
    </div>
  ); 
}

export default App;