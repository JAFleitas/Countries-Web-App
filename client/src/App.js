import './App.css';
import Container from './Components/ContainerFilter/Container';
import Countries from './Components/Countries/Countries'
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Countries />
      <Container />
    </div>
  );
}

export default App;
