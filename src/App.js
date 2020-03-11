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
    num1: false,
    num2: false,
    num3: false,
    num4: false,
    num5: false,
    num6: false,
    num7: false,
    num8: false
  });
  
  const handleChange = name => event => {
    setState({...state, [name]: event.target.checked});   
  }



  return (
    <div className="App">
      <Box id="exe1" border={1} width={1/2} padding={3}>
      {/* <FormControl>
        <FormGroup> */}
          
          <div>
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num8')} value="num8" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num7')} value="num7" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num6')} value="num6" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num5')} value="num5" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num4')} value="num4" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />
          <FormControlLabel
            control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num3')} value="num3" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
          />  
            <FormControlLabel
              control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num2')} value="num2" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
            />
            <FormControlLabel
              control= {<GrayCheckbox checked={state.mNActive} onChange={handleChange('num1')} value="num1" icon={<RadioButtonUncheckedTwoToneIcon />} checkedIcon={<RadioButtonCheckedTwoToneIcon />} />}
            />
          </div>
          <div><br></br></div>
          <div style={{
          display: "flex",
          height: "2",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <Box border={1} width={1/2}>
              <p>Hello</p>
            </Box>
          </div>
          <div><br></br></div>
          <div> 
            <Button variant="contained" color="primary" component="span">convert</Button>
          </div>
          <div><br></br></div>
          <div style={{
          display: "flex",
          height: "2",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box border={1} width={1/2}>
            <p> hola</p>
          </Box>
        </div>
      </Box>
    </div>
  ); 
}

export default App;