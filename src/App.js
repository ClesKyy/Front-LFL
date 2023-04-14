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
import PlayerApi from './PlayerApi';
import Classement from './Classement';
import { Class } from '@mui/icons-material';
import ClassementApi from './ClassementApi';
import MatchApi from './MatchApi';


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
        <Route path="/equipes/:teamName" element={<PlayerApi/>} />
        <Route path="/joueurs" element={<Player />} />
        <Route path="/classement" element= {<ClassementApi/>} />
        <Route path="/match" element= {<MatchApi/>} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
