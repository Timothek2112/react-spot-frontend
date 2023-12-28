import { useState } from 'react';
import Home from './components/Home';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BaseUnlogged from './components/BaseUnlogged';
import Login from './components/Login';

function App() {
 return(
  <>
    <Router>
      <Routes>
        <Route
        exact
        path="/"
        element={<Home/>}
        />
        <Route
        exact
        path="/login"
        element={<Login/>}
        />
      </Routes>
    </Router>
  </>
    
  );
}

export default App;
