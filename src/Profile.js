
import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import { Card, CardContent, LinearProgress } from '@mui/material';
import axios from 'axios';

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
                    <div className='profile-content'>
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
                                        <LinearProgress color='inherit' variant="determinate" value={10} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
export default Profile;
