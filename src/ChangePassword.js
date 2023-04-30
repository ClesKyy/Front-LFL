
import React from 'react';
import AppHeader from './AppHeader';
import './App.css';
import { Button, Card, CardContent, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function ChangePassword(props) {
    const [showOldPassword, setOldShowPassword] = React.useState(false);
    const [showNewPassword, setNewShowPassword] = React.useState(false);
    const [formDataChangeChangePassword, setFormDataChangeChangePassword] = React.useState({ oldPassword: '', newPassword: '' });
    const handleChangeChangePassword = (event, newValue) => {
        setFormDataChangeChangePassword({
            ...formDataChangeChangePassword,
            [event.target.password]: event.target.value
        });
    };
    return (
        <div>
            <div>
                <AppHeader />
            </div>
            <Card className='change-password-card'>
                <CardContent>
                    <div className='change-password-title'>Modification mot de passe :</div>
                    <div className='change-password-card-password'>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="change-password-input-current-password">Mot de passe actuel</InputLabel>
                            <Input
                                id="change-password-input-current-password"
                                name='password'
                                type={showOldPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onChange={(event) => handleChangeChangePassword(event)}
                                            aria-label="toggle password visibility"
                                            onClick={() => setOldShowPassword(!showOldPassword)}
                                        >
                                            {showOldPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="change-password-input-new-password">Nouveau mot de passe</InputLabel>
                            <Input
                                id="change-password-input-new-password"
                                name='password'
                                type={showNewPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setNewShowPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                    <div className='change-password-button-div'><Button className='change-password-button-submit' type='submit' variant="contained">Valider</Button></div>
                </CardContent>
            </Card>
        </div>
    );
}
export default ChangePassword;
