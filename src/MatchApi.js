
import React, { useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import './App.css';
import axios from 'axios';
import Match from './Match';

function MatchApi() {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7108/match", {
        }).then((res) => {
            console.log(res.data)
            setMatches(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <AppHeader />
            <div>
            {matches.map((matches, index) => (
                <Match matches={matches} key={index} />
            ))}
            </div>
        </div>
    );
}
export default MatchApi;
