import { Card, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Player(props) {
    const [team, setTeam] = useState({});
    const { teamName } = useParams();

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
            <div className='player'>
                <div className='player-row'>
                    <div className='player-card'>
                        <Card>
                            <CardContent>
                                <div className='player-card-role'>
                                    <div>
                                    <img className='player-card-role-img' src={props.player.roleIcon}></img>
                                    </div>
                                    <div>
                                    <img className='player-card-role-img' src={team.logo}></img>
                                    </div>  
                                </div>
                                <div className='player-card-player'>
                                    <img className='player-card-player-img' src={props.player.profileImg}></img>
                                </div>
                                <div className='player-card-name'>
                                    {props.player.pseudo}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    
                </div>
            </div>
    );
}

export default Player;