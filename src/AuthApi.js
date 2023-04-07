import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import Team from "./Team";
import './App.css';
import AppHeader from "./AppHeader";

function AuthApi(props) {

  const [home, setAuth] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7108/auth", {
    }).then((res) => {
      console.log(res.data)
      setAuth(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
    <AppHeader />
    <div className="team__row">
      {team.map((item, index) => (
        <Team key={index} team={item} />
      ))}
      </div>
    </div>
  );
}

export default AuthApi;
