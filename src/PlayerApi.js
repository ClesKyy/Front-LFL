import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import Player from "./Player";
import { useParams } from "react-router-dom";

function PlayerApi(props) {

  const { teamName } = useParams();
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState({});

  useEffect(() => {
    axios.get(`https://localhost:7108/team/${teamName}/player`, {
    }).then((res) => {
      console.log(res.data)
      setPlayer(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [teamName]);

  useEffect(() => {
    axios.get(`https://localhost:7108/team/${teamName}`, {})
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <div className="player-header">
        <div>
        <img className="player-header-logo" src={team.logo} />
        <h1 style={{ fontWeight: 'bold' , fontSize: '48px'}}>{teamName.toUpperCase()}</h1>
        </div>
      </div>
      <div className="test">
        <div className="test2">
          Victoires : {team.win}
        </div>
        <div className="test2">
          Défaites : {team.lose}
        </div>
      </div>
      <div className="player-row">
        {player.map((item, index) => (
          <Player key={index} player={item} />
        ))}
      </div>
    </div>
  );
}

export default PlayerApi;
