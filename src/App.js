import React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ListItemText } from '@material-ui/core';

const useStyle = makeStyles (theme => ({
  box1: {
    marginLeft: theme.spacing(15),
    height: "75%",
  },

  buttons: {
    margin: 5,
    
  },
}));

function App() {
  const [items, setItems] = React.useState(["2020-03-25"]);
  const [selected, setSelected] = React.useState(-1);
  
  const select = (event, index) => {
    setSelected(index);
  }

  const add = (event) => {
    setItems(items.concat(event.target.value));
  }

  const remove = (event) => {
    setItems(items.slice(0, selected).concat(items.slice(selected + 1)));
    setSelected(-1);
  }

  const handleValueChange = (event, index) => {
    let itemsUpdate = items.slice(0, index).concat([event.target.value]).concat(items.slice(index + 1));
    setItems(itemsUpdate);
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
          <List>
            {items.map((item, index) => 
              <ListItem
                key={"date" + index}
                button
                selected={index === selected}
                onClick={(event) => {select(event, index);}}>
                  <ListItemText
                    key={"dateText"+ index}
                    primary={<Typography>{(item) ? item.split("-").join("/") : ""}</Typography>}
                    />
                    <TextField
                        type="date"
                        label="Date"
                        onChange={(event) => {handleValueChange(event, index)}}
                        value={item}
                        InputLabelProps={{
                              shrink: true,
                        }}
                    />
               </ListItem>
            )}
          </List>
        </Box>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs>
            <Button variant="contained" 
                    color="primary"
                    className={ styledClasses.buttons }
                    onClick={remove} disabled={selected < 0}>Remove</Button>
            <Button variant="contained"
                    color="primary"
                    className={ styledClasses.buttons } 
                    onClick={add}>Add</Button>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
      
    </div>
  ); 
}

export default App;