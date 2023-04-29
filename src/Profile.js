
import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import { Card, CardContent } from '@mui/material';
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
                    <img className='profile-avatar-icon' src="https://1.bp.blogspot.com/-9N4wHnisYnI/YTurIWCPi3I/AAAAAAAB_vE/x9UQiid2gwo1i1GJ_AOwrJyL-QDiTap-gCLcBGAsYHQ/w200-h200/5067.jpg" />
                </div>
                <div className='profile-user-name'>
                   {user.pseudo}
                </div>
                <CardContent>Hello</CardContent>
            </Card>
        </div>
    );
}
export default Profile;
