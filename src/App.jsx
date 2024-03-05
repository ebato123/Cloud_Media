import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css'

import FormComp from './context/FormComp.jsx';
import MDBApiComp from './context/MDBApiComp.jsx';
import Home from './components/pages/Home.jsx'
import LogIn from './components/pages/LogIn.jsx'
import MovieFinder from './components/pages/MovieFinder.jsx';


function App() {
  return (
    <>
      <Router>
        <MDBApiComp>
          <FormComp>
            <Routes>
              <Route path="/" element={<Home lang="es" path="/"/>}></Route>
              <Route path="/en" element={<Home lang="en" path="/en"/>}></Route>
              <Route path="/login" element={<LogIn lang="es" path="/login"/>}></Route>
              <Route path="/login/en" element={<LogIn lang="en" path="/login/en"/>}></Route>
              <Route path="/movie_finder" element={<MovieFinder lang="es" path="/movie_finder"/>}></Route>
              <Route path="/movie_finder/en" element={<MovieFinder lang="en" path="/movie_finder/en"/>}></Route>
            </Routes>
          </FormComp>
        </MDBApiComp>
      </Router>
    </>
  );
}

export default App;
