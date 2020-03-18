import React from 'react';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import { gray } from 'color-name';
import { withStyles } from '@material-ui/core/styles';
import RadioButtonCheckedTwoToneIcon from '@material-ui/icons/RadioButtonCheckedTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';

const GrayCheckbox = withStyles({
  root: {
    color: gray[400],
    '&$checked': {
      color: gray[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

function App() {
  const [firstName, setFName] = React.useState("");
  const [middleName, setMName] = React.useState("");
  const [lastName, setLName] = React.useState("");

  const [state, setState] = React.useState({
    mNActive: true
  });
  
  const handleChange = name => event => {
    setState({...state, [name]: event.target.checked});   
  }
  const handleAutoFil = () => {
   setFName("Santiago");
   setLName("Torres");
   setMName("Juan");
  }


  return (
    <div className="App">
      <Box id="exe1" border={1} width={1/4} padding={3}>
      {/* <FormControl>
        <FormGroup> */}
          
          <div>
            <TextField id="fName" label="First Name:" variant="outlined" value={firstName}></TextField>
          </div>
        
          <div>
            <TextField id="mName" label="Middle Name:" variant="outlined" disabled={!state.mNActive} value={middleName}></TextField>
          </div>
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('mNActive')} value="mNActive" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
            label="Middle Name" 
          />
          <div>
            <TextField id="Lname" label="Last Name:" variant="outlined" value={lastName}></TextField>
          </div>
          <div>
      <Button id="autoFill" variant="outlined" onClick={handleAutoFil}>Autofill</Button>
          </div>
          {/* </FormGroup>
      </FormControl> */}
      </Box>
    </div>
  ); 
}

export default App;