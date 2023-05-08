
import React from 'react';
import AppHeader from './AppHeader';
import './App.css';
import { Button, Card, CardContent, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { CheckCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';

function ChangePassword(props) {
    const name = localStorage.getItem("name");
    const [showOldPassword, setOldShowPassword] = React.useState(false);
    const [showNewPassword, setNewShowPassword] = React.useState(false);
    const [formDataChangeChangePassword, setFormDataChangePassword] = React.useState({ oldpassword: '', newpassword: '' });
    const handleChangeChangePassword = (event, newValue) => {
        setFormDataChangePassword({
            ...formDataChangeChangePassword,
            [event.target.name]: event.target.value
        });
    };
    const onSubmitChangePassword = (event) => {
        event.preventDefault();
        axios.put(`https://localhost:7108/auth/${name}`, formDataChangeChangePassword)
            .then((res) => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("name");
                localStorage.removeItem("password");
                var errorMessage = document.getElementById("signup-message");
                errorMessage.classList.remove("login__hidden-signup");
                var errorMessage = document.getElementById("error-message");
                errorMessage.classList.add("login__hidden");
                setTimeout(function() {
                    window.location.href = "/login";
                }, 2000);
            })
            .catch(() => {
                var errorMessage = document.getElementById("error-message");
                errorMessage.classList.remove("login__hidden");
                var errorMessage = document.getElementById("signup-message");
                errorMessage.classList.add("login__hidden-signup");
            })
    }
    return (
        <div>
            <div>
                <AppHeader />
            </div>
            <Card className='change-password-card'>
                <form onSubmit={(event) => onSubmitChangePassword(event)}>
                    <CardContent>
                        <div className='change-password-title'>Modification mot de passe :</div>
                        <div className='change-password-card-password'>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="change-password-input-current-password">Mot de passe actuel</InputLabel>
                                <Input
                                    onChange={(event) => handleChangeChangePassword(event)}
                                    id="change-password-input-current-password"
                                    name='oldpassword'
                                    type={showOldPassword ? 'text' : 'oldPassword'}
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
                                    onChange={(event) => handleChangeChangePassword(event)}
                                    id="change-password-input-new-password"
                                    name='newpassword'
                                    type={showNewPassword ? 'text' : 'newpassword'}
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
                        <div className='change-password-button-div'><Button className='change-password-button-submit' type='submit' variant="contained">Valider</Button>
                            <div id="error-message" className='login__hidden'><span><CancelIcon></CancelIcon></span> Une erreur est survenue</div>
                            <div id="signup-message" className='login__hidden-signup'><span><CheckCircle></CheckCircle></span> Votre mot de passe a été changé</div>
                        </div>

                    </CardContent>
                </form>
            </Card>
        </div>
    );
}
export default ChangePassword;
