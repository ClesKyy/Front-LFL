import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { Base64 } from 'js-base64';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { BuildOutlined } from '@mui/icons-material';
import { fontWeight } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#000000',
        },
    },
});

function AppHeader(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        checkIfConnected();
    }, [isConnected])

    const logout = () => {
        localStorage.removeItem("access_token");
    }

    function isTokenExpired(token) {
        try {
            // Décoder le token pour récupérer les données de payload
            const payload = JSON.parse(Base64.decode(token.split(".")[1]));
            // Récupérer la propriété 'exp' qui contient un timestamp
            const expiresAt = payload.exp;
            // Transformer le timestamp en date
            const expirationDate = new Date(expiresAt * 1000);
            // Vérifier si la date d'expiration est supérieure à l'heure actuelle
            return expirationDate < new Date();
        } catch (err) {
            console.error(err);
            return true;
        }
    }

    function checkIfConnected() {
        const token = localStorage.getItem("access_token");
        if (token == null || isTokenExpired(token)) {
            setIsConnected(false);
        }
        else {
            setIsConnected(true);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <a className='app-header-logo-link' href='/'> <img className='app-header-logo' src='https://lollfl.com/assets/logo-intro-home.svg?3d72643'></img> </a>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <div className='app-header-div-button'>
                                <Button className='app-header-button' color="inherit">Accueil</Button>
                                <Button className='app-header-button' color="inherit" component={Link} to="/equipes">Équipe</Button>
                                <Button className='app-header-button' color="inherit" >Équipe</Button>
                            </div>
                        </Typography>

                        {isConnected ? <Button className='app-header-button-login' color="inherit">Connexion</Button> :
                        <Button color='inherit'>
                            <div className='app-header-div-profile'>
                                <div>
                                    <div>
                                       <span style={{ fontWeight: 'bold' }}>ClesKy</span> 
                                    </div>
                                    <div className='app-header-div-coins-bet'>
                                        <div>
                                            12 110
                                        </div>
                                        <div className='app-header-div-logo-bet'>
                                            <img className='app-header-logo-bet' src='https://www.riotgames.com/assets/img/meta/6e86ac3d497a87330d381e3ee6e193c3/favicon.ico'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='app-header-div-avatar'>
                                    <Avatar alt="Remy Sharp" src="https://1.bp.blogspot.com/-9N4wHnisYnI/YTurIWCPi3I/AAAAAAAB_vE/x9UQiid2gwo1i1GJ_AOwrJyL-QDiTap-gCLcBGAsYHQ/w200-h200/5067.jpg" />
                                </div>
                            </div>
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default AppHeader;
