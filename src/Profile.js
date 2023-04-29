
import React from 'react';
import './App.css';
import AppHeader from './AppHeader';
import { Avatar, Card } from '@mui/material';

function Profile(props) {
    return (
        <div>
            <div>
                <AppHeader />
            </div>
            <Card>
                <Avatar alt="Avatar" src="https://1.bp.blogspot.com/-9N4wHnisYnI/YTurIWCPi3I/AAAAAAAB_vE/x9UQiid2gwo1i1GJ_AOwrJyL-QDiTap-gCLcBGAsYHQ/w200-h200/5067.jpg" />
            </Card>
        </div>
    );
}
export default Profile;
