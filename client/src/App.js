import { Routes, Route} from 'react-router';

import './App.css';
import Container from './Components/ContainerFilter/Container';
import Countries from './Components/Countries/Countries'
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Form from './Components/FormActivity/FormActivity';
import Landing from './Components/LandingPage/Landing';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Countries/>} />
      </Routes>
    </div>
  );
}

export default App;
