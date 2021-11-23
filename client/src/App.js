import { Routes, Route} from 'react-router';

import './App.css';
import Countries from './Components/Countries/Countries'
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Form from './Components/FormActivity/FormActivity';
import Landing from './Components/LandingPage/Landing';

import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <div className='app-container'>
        <div className='nav'>
          <Routes>
              <Route path='/home' element={<NavBar/>} />
          </Routes>
        </div>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Countries/>} />
          <Route path='/create_activity' element={<Form/>} />
          <Route path="/country/:id" element={<CountryDetail />}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
