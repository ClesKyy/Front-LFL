/*import axios from "axios";
import { useEffect, useState } from "react";
import * as React from 'react';
import './App.css';

function AuthApi(props) {
  const { userPseudo } = useParams();
  const [header, setAuth] = useState([]);
  useEffect(() => {
    axios.get(`https://localhost:7108/auth/${userPseudo}`, {
    }).then((res) => {
      console.log(res.data)
      setAuth(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [userPseudo])


  return (
    <div>
      {user.map((item, index) => (
        <User key={index} user={item} />
      ))}
    </div>
  );
}

export default AuthApi;
*/