import {Container} from '@mui/material'
import {Scene, Hud} from './containers';

function App() {
  return (
    <Container maxWidth="xl" className="App">
    <Scene />
    <Hud />
    </Container>
  );
}

export default App;
