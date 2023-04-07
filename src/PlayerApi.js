import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import Player from "./Player";

function PlayerApi(props) {

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    axios.get(`https://localhost:7108/team/${props.teamName}/player`, {
    }).then((res) => {
      console.log(res.data)
      setPlayer(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [props.teamName]);


  return (
    <div>
    <AppHeader />
    <div className="team__row">
      {player.map((item, index) => (
        <Player key={index} player={item} />
      ))}
      </div>
    </div>
  );
}

export default PlayerApi;
