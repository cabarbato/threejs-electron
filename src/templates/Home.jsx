import { Container } from '@mui/material'
import { Scene, Hud } from '../containers';

const Home = () => {
  return (
    <Container maxWidth="xl" p={0} className="App">
      <Scene />
      <Hud />
    </Container>
  );
}

export default Home;
