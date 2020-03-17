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
import { TextareaAutosize } from '@material-ui/core';

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
  const [mCilck, setMClick] = React.useState(0);
  const [mMove, setMMove] = React.useState(0);
  const [mScrol, setMScrol] = React.useState(0);

  
  const handleClick = () => {
    setMClick(mCilck + 1);
  }


  return (
    <div className="App">
      <Box id="exe1" border={1} width={1/4} padding={3}>
        <Box border={1}>Mouse was clicked:
            <Button variant="outlined" onClick={handleClick}> Button {mCilck}</Button>
        </Box>
        <br></br>
        <Box  border={1} height={30}></Box>
      
         
      </Box>
    </div>
  ); 
}

export default App;