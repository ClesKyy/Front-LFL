import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Team from "./Team";
import './App.css';
import AppHeader from "./AppHeader";
import Classement from "./Classement";

function ClassementApi(props) {

  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7108/team", {
    }).then((res) => {
      console.log(res.data)
      setTeam(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
    <AppHeader />
      {team.map((item, index) => (
        <Classement key={index} team={item} />
      ))}
    </div>
  );
}

export default ClassementApi;
