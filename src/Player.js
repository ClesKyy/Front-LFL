import { Card, CardContent } from '@mui/material';
import React, { useEffect } from 'react';
import AppHeader from './AppHeader';
import './App.css';
import { useParams } from 'react-router-dom';
function Player(props) {
        useEffect(()=>{
        },[])
    return (
        <div>
            <AppHeader />
            <div className='player'>
                <div className='player-row'>
                    <div className='player-card'>
                        <Card>
                            <CardContent>
                                <div className='player-card-role'>
                                    <img className='player-card-role-img' src='https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-bottom.png'></img>
                                </div>
                                <div className='player-card-player'>
                                    <img className='player-card-player-img' src='https://images.prismic.io/liguefrlol/f353b5d1-1ead-4162-8359-2e82beaa69b5_Eika_Face.png?auto=compress,format'></img>
                                </div>
                                <div className='player-card-name'>
                                    Eika
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <p> {props.player.pseudo}</p>
                </div>
            </div>
        </div>

    );
}


export default Player;
