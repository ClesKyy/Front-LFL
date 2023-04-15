import { Card, CardContent } from '@mui/material';
import React, { useEffect } from 'react';
import './App.css';
function Team(props) {
    useEffect(()=>{
    })
    return (
        <div className='team'>
            <div className='team__container'>
                <div className='team__row'>
                    <a className='team__card-link' href= {'/equipes/'+ props.team.name}>
                        <div className='team__card'>
                            <Card>
                                <CardContent>
                                    <div className='team__card-logo'>
                                        <img className='team__card-logo-img' src={props.team.logo}></img>
                                    </div>
                                    <div className='team__card-name'>
                                        {props.team.label}
                                        </div>
                                </CardContent>
                            </Card>
                        </div>
                    </a>

                </div>
            </div>
        </div>

    );
}


export default Team;
