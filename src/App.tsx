import styled from 'styled-components';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import Switch from './components/Switch';

const Container = styled.div`
  width: 100%;
  max-width: 350px;
  height: 80vh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  padding: 16px;
  margin-top: 10vh;
`;

function App() {
  return (
    <Container>
      <Switch />
      <Display />
      <Keyboard />
    </Container>
  );
}

export default App;
