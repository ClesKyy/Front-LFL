
import React from 'react';
import AppHeader from './AppHeader';
import './App.css';
import { Card, LinearProgress } from '@mui/material';

function Home(props) {
    return (
        <body className='home-body'>
            <div>
                <div>
                    <AppHeader />
                </div>
                <div className='home-header-banner'>
                </div>
                <div className='home-title-div'>
                    <h1 className='home-title'>Suivez toutes la compétition française <br></br> de League of Legends </h1>
                </div>
                <div className='home-container-icon'>
                    <div className='home-item-icon'>
                        <div className='home-item-icon-content-image'>
                            <img className='home-icon' src='https://cdn-icons-png.flaticon.com/512/661/661512.png'></img>
                        </div>
                        <div className='home-item-icon-content-text'>
                            Ne ratez aucun match avec notre calendrier
                        </div>
                    </div>
                    <div className='home-item-icon'>
                        <div className='home-item-icon-content-image'>
                            <img className='home-icon' src='https://cdn-icons-png.flaticon.com/512/4301/4301534.png'></img>
                        </div>
                        <div className='home-item-icon-content-text'>
                            Regarder qui est en sommet de la compétition
                        </div>
                    </div>
                    <div className='home-item-icon'>
                        <div className='home-item-icon-content-image'>
                            <img className='home-icon' src='https://cdn-icons-png.flaticon.com/512/3592/3592606.png'></img>
                        </div>
                        <div className='home-item-icon-content-text'>
                            Parier en toute sécurité avec un système 100% gratuit &nbsp;
                            <img className='prankex' src='https://cdn.betterttv.net/emote/6279756b3c6f14b688476306/3x.webp'></img>
                        </div>
                    </div>
                </div>
                <div className='home-container-level'>
                    <div className='home-item-level'>
                        <Card style={{ padding: '50px' }} >
                            <div className='profile-content-card'>
                                <div className='profile-content-card-avatar-div'>
                                    <img className='profile-content-card-avatar-image' src='https://1.bp.blogspot.com/-9N4wHnisYnI/YTurIWCPi3I/AAAAAAAB_vE/x9UQiid2gwo1i1GJ_AOwrJyL-QDiTap-gCLcBGAsYHQ/w200-h200/5067.jpg' />
                                </div>
                                <div className='profile-content-card-level'>
                                    <div className='profile-content-card-level-number'>
                                        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                                            Niv. 250
                                        </div>
                                        <div>
                                            35 000 Exp
                                        </div>
                                    </div>
                                    <div>
                                        <LinearProgress color='inherit' variant="determinate" value={50} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default Home;
