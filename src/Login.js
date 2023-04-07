import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';
import { AppBar, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Tab, Tabs, TextField, ThemeProvider } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, Lock, Email } from '@mui/icons-material';
import WebFont from 'webfontloader';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import axios from 'axios';
import { Navigate, useHistory } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#000000',
        },
    },
});

function Login(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [value, setValue] = React.useState('1');
    const [formData, setFormData] = React.useState({ pseudo: '', password: '' });
    const onSubmit = (event) => {
        event.preventDefault();

        axios.post("https://localhost:7108/auth/login", formData)
            .then((res) => {
                console.log(res.data.token);
                localStorage.setItem("access_token", res.data.token);
                const token = localStorage.getItem("access_token");
                if (token != null){
                    window.location.href = "/";
                }
            
            })
            .catch(() => {
                console.log("Identifiants incorrects");
            })
    }

    const connect=() => { }       


    const handleChange = (event, newValue) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleChangeForm = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="login">
                <Card className='login__card'>
                    <div className="login__card-login">
                        <TabContext value={value}>
                            <Box className='login__div-center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChangeForm} aria-label="lab API tabs example">
                                    <Tab label="Connexion" value="1" />
                                    <Tab label="Inscription" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <form onSubmit={(event) => onSubmit(event)}>
                                    <CardContent>
                                        <div className='login__card-login'>
                                            <h2>
                                                Connexion
                                            </h2>
                                            <div className='login__container-inputs'>
                                                <div className='login__column-inputs'>
                                                    <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                        <TextField onChange={(event) => handleChange(event)} name='pseudo' className='login__text-user' id="input-with-sx" label="Nom d'utilisateur" variant="standard" />
                                                    </Box>
                                                    <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                        <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                        <FormControl variant="standard">
                                                            <InputLabel htmlFor="login-input-password">Mot de passe</InputLabel>
                                                            <Input
                                                                onChange={(event) => handleChange(event)}
                                                                id="login-input-password"
                                                                name='password'
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
                                        </div>
                                    </CardContent>
                                    <div className='login__div-center'>
                                        <div className='login__column-inputs'>
                                            <CardActions>
                                                <Button type='submit' variant="contained"> Connexion </Button>
                                            </CardActions>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel value="2">
                                <CardContent>
                                    <div className='login__card-login'>
                                        <h2>
                                            Inscription
                                        </h2>
                                        <div className='login__container-inputs'>
                                            <div className='login__column-inputs'>
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <TextField className='login__text-user' id="input-with-sx" label="Nom d'utilisateur" variant="standard" />
                                                </Box>
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <TextField className='login__text-user' id="input-with-sx" label="Email" variant="standard" />
                                                </Box>
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <FormControl variant="standard">
                                                        <InputLabel htmlFor="signup-input-password">Mot de passe</InputLabel>
                                                        <Input
                                                            id="signup-input-password"
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
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <FormControl variant="standard">
                                                        <InputLabel htmlFor="signup-input-confirm-password">Confirmer le mot de passe</InputLabel>
                                                        <Input
                                                            id="signup-input-confirm-input-password"
                                                            type={showConfirmPassword ? 'text' : 'password'}

                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                                    >
                                                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className='login__div-center'>
                                    <div className='login__column-inputs'>
                                        <CardActions>
                                            <Button variant="contained">Inscription</Button>
                                        </CardActions>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    );
}
export default Login;
