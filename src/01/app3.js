import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './App.css';



function App() {
  const [mCilck, setMClick] = React.useState(0);
  const [mMove, setMMove] = React.useState({
    x: 0,
    y: 0
  });
  const [mScrol, setMScrol] = React.useState(0);

  
  const handleClick = () => {
    setMClick(mCilck + 1);
  }

  const handleMouse = event => {
    setMMove({ x: event.screenX,
               y: event.screenY });
  }
  const handleScrol = event => {
    setMScrol(event.deltaY);
  }

  return (
    <div className="App" style={{height:900, width:600}} onMouseMove={handleMouse} onWheel={handleScrol}>
      <Box id="exe1" border={1} width={1/2} padding={3}>
        <Box border={1}>Mouse was clicked:
            <Button variant="outlined" onClick={handleClick}> Button {mCilck}</Button>
        </Box>
        <br></br>
        <Box  border={1} height={30}>Mouse was moved at x: {mMove.x} y: {mMove.y}</Box>
        <br></br>
        <Box  border={1} height={30}>Mouse wheel event: {mScrol}</Box>  
         
      </Box>
    </div>
  ); 
}

export default App;