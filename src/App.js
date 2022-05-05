import './App.css';
import {AppBar ,Typography} from '@mui/material'
import Notifications from './components/notofications';
import VideoPlayer from './components/videoPlayer';
import Options from './components/options';

function App() {
  return (
    <div className="App">
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video call App</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
      
    </div>
  );
}

export default App;
