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
  const [middleN, setMiddleN] = React.useState(false);
  const [checkMN, setCheckMN] = React.useState({
    checked: true
  })

  const handleChange = name => event => {
    setCheckMN({ ...checkMN, [name]: event.target.checked });
  };
    



  return (
    <div className="App">
      <Box id="exe1" border={1} width={1/4}>
      {/* <FormControl>
        <FormGroup> */}
          
          <div>
            <TextField id="fName" label="First Name:" variant="outlined"></TextField>
          </div>
        
          <div>
            <TextField id="mName" label="Middle Name:" variant="outlined" disabled={middleN}></TextField>
          </div>
          <div style={{marginLeft: '-10px'}}> 
            <FormControlLabel
              control= {<GrayCheckbox icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
              label="Middle Name" checked={checkMN.checked} onChange={handleChange('checked')} value="checked" 
            />
          </div>
          <div>
            <TextField id="Lname" label="Last Name:" variant="outlined"></TextField>
          </div>
          <div>
            <Button id="autoFill" variant="outlined">Autofill</Button>
          </div>
          {/* </FormGroup>
      </FormControl> */}
      </Box>
    </div>
  ); 
}

export default App;