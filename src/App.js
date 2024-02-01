import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css'

import Home from './components/pages/Home.js'
import LogIn from './components/pages/LogIn.js'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home lang="es"/>}></Route>
          <Route path="/en" element={<Home lang="en"/>}></Route>
          <Route path="/login" element={<LogIn lang="es" />}></Route>
          <Route path="/login/en" element={<LogIn lang="en" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
