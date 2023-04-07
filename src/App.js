import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Team from './Team';
import Player from './Player';
import TeamApi from './TeamApi';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Noto Sans Hanunoo']
      }
    });
   }, []);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/equipes" element={<TeamApi />} />
        <Route path="/equipes/:Team" element={<Player/>} />
        <Route path="/joueurs" element={<Player />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
