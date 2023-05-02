
import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import { Button, Card, CardContent, LinearProgress, ThemeProvider, createTheme } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
    },
});

function Profile(props) {
    const pseudo = localStorage.getItem("pseudo");
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`https://localhost:7108/auth/${pseudo}`, {})
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <div>
                <div>
                    <AppHeader />
                </div>
                <Card className='profile-card'>
                    <div className='profile-avatar-div'>
                        <div>
                            <img className='profile-avatar-icon' src="https://1.bp.blogspot.com/-9N4wHnisYnI/YTurIWCPi3I/AAAAAAAB_vE/x9UQiid2gwo1i1GJ_AOwrJyL-QDiTap-gCLcBGAsYHQ/w200-h200/5067.jpg" />
                        </div>
                        <div className='profile-avatar-level'>
                            <span className='profile-avatar-level-number'>250</span>
                        </div>

                    </div>
                    <div className='profile-user-name'>
                        {user.pseudo}
                    </div>
                    <CardContent>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <div className='profile-content-card-rank'>
                                    <div>
                                        <img className='profile-content-card-rank-image' src='https://cdn3.emoji.gg/emojis/9476-challenger.png' />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                                            Diamond
                                        </div>
                                        <div>
                                            32 LP
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='profile-content-right'>
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
                            </div>
                        </div>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Parties pariées :</span>
                                <div>0</div>
                            </div>
                            <div className='profile-content-right'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Taux de Victoire  :</span>
                                <div>0</div>
                            </div>
                        </div>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Victoires :</span>
                                <div>0</div>
                            </div>
                            <div className='profile-content-right'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Défaites :</span>
                                <div>0</div>
                            </div>
                        </div>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Nombre de points :</span>
                                <div className='profile-content-left-point'><div>12 000</div>
                                    <div className='app-header-div-logo-bet'>
                                        <img className='app-header-logo-bet' src='https://www.riotgames.com/assets/img/meta/6e86ac3d497a87330d381e3ee6e193c3/favicon.ico'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className='profile-card'>
                    <div>
                        <div className='profile-card-info-title-content'>Vos informations</div>
                    </div>
                    <CardContent>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Nom d'utilisateur :</span>
                                <div>{user.pseudo}</div>
                            </div>
                            <div className='profile-content-right'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Email :</span>
                                <div>{user.email}</div>
                            </div>
                        </div>
                        <div className='profile-content-row'>
                            <div className='profile-content-left'>
                                <span style={{ fontWeight: 'bold', fontSize: '24px' }}>Changer de mot de passe  </span>
                                <div><Button className='app-header-button-login' variant="contained" component={Link} to="/profil/password">Modifier mot de passe</Button></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
}
export default Profile;
