import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import { AppBar, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import WebFont from 'webfontloader';

function Signup(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    /*<div className='login__div-center'>
    <img className='login__logo-lfl' src='https://lollfl.com/assets/logo-intro-home.svg?3d72643'></img>
    </div> */

    return (
        <div className="login">
            <Card className="login__card-login" >
                <CardContent>

                    <h2>
                        Inscription
                    </h2>
                    <div className='login__container-inputs'>
                        <div className='login__column-inputs'>
                            <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField className='login__text-user' id="input-with-sx" label="Utilisateur" variant="standard" />
                            </Box>
                            <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="input-password">Password</InputLabel>
                                    <Input
                                        id="input-password"
                                        type={showPassword ? 'text' : 'password'}

                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                </CardContent>
                <div className='login__div-center'>
                    <div className='login__column-inputs'>
                        <CardActions>
                            <Button variant="contained">Connexion</Button>
                        </CardActions>
                       <span className='login__span'>Vous êtes nouveau ? <a className='login__span-link' href='/inscription'>Cliquez-ici</a></span> 
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Signup;
