import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Player from './Player';
import TeamApi from './TeamApi';
import PlayerApi from './PlayerApi';
import ClassementApi from './ClassementApi';
import MatchApi from './MatchApi';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import Test from './Test';
import { Base64 } from 'js-base64';

function isTokenExpired(token) {
  try {
    // Décoder le token pour récupérer les données de payload
    const payload = JSON.parse(Base64.decode(token.split(".")[1]));
    // Récupérer la propriété 'exp' qui contient un timestamp
    const expiresAt = payload.exp;
    // Transformer le timestamp en date
    const expirationDate = new Date(expiresAt * 1000);
    // Vérifier si la date d'expiration est supérieure à l'heure actuelle
    return expirationDate < new Date();
  } catch (err) {
    console.error(err);
    return true;
  }
}
function ProtectedRoute({children}) {
  const token = localStorage.getItem("access_token");
  if (token == null || isTokenExpired(token)){
    return(<Navigate to="/login"></Navigate>)
  }

  return children;
}
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
        <Route path="/profil" element= {<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/profil/password" element= {<ProtectedRoute><ChangePassword/></ProtectedRoute>} />
        <Route path="/test" element= {<Test/>} />
        </Routes>
        </BrowserRouter>
  );
}
export default App;
