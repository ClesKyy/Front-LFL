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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <ThemeProvider theme={theme}>
            <div className="login">
                <Card className='login__card'>
                    <div className="login__card-login">
                        <TabContext value={value}>
                            <Box className='login__div-center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Connexion" value="1" />
                                    <Tab label="Inscription" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <CardContent>
                                    <div className='login__card-login'>
                                        <h2>
                                            Connexion
                                        </h2>
                                        <div className='login__container-inputs'>
                                            <div className='login__column-inputs'>
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <TextField className='login__text-user' id="input-with-sx" label="Nom d'utilisateur" variant="standard" />
                                                </Box>
                                                <Box className='login__inputs' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <FormControl variant="standard">
                                                        <InputLabel htmlFor="login-input-password">Mot de passe</InputLabel>
                                                        <Input
                                                            id="login-input-password"
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
                                            <Button variant="contained">Connexion</Button>
                                        </CardActions>
                                    </div>
                                </div>
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
