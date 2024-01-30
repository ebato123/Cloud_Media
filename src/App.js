import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css'

import Home from './components/pages/Home.js'
import LogIn from './components/pages/LogIn.js'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
