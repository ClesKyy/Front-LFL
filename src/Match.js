import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, Button, createTheme } from '@mui/material';
import moment from 'moment';


function Match(props) {
    const [buttonsVisible, setButtonsVisible] = useState(false);
    const handleClick = (index) => {
        setButtonsVisible((prevStates) => {
            const newState = { ...prevStates };
            newState[index] = !newState[index];
            return newState;
          });
      };
      const handleClickBlue = (index) => {  
        setButtonsVisible((prevStates) => {
            const newState = { ...prevStates };
            newState[index] = !newState[index];
            return newState;
          });
      };
    return (
        <div>
            <div className='match'>
                <div className='match-row'>
                    <div className='match-cards'>
                        <div className="matchDate">
                            <span><img src='https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/rewards-modal/arrow-right-hover.png'></img></span>{moment(props.matches.matchDate).format('DD/MM/YYYY')}
                        </div>
                        {props.matches.matches.map((match, index) => (
                            <Card className='match-card'>
                                <CardContent>
                                    <div className='match-card-content'>
                                        <div className='match-logo-left'>
                                            <div>
                                                <div>
                                                    <img className={`${match.blueTeamScore < match.redTeamScore ? "match-logo-img-opacity" : match.blueTeamScore === match.redTeamScore ? "match-logo-img" : "match-logo-img"}`} src={match.blueTeamLogo}></img>
                                                </div>
                                                {buttonsVisible[index] && (
                                                    <div id={`vote-button-blue-${index}`}>
                                                        <div className='vote-button'>
                                                            <Button onClick={() => handleClickBlue(index)} className='app-header-button-login'>Vote</Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='match-title-team-left'>
                                                {match.blueTeamName.toUpperCase()}
                                            </div>
                                        </div>
                                        <div className='match-logo-middle'>
                                            <div>
                                                {moment(match.matchDate).format('HH:mm')}
                                            </div>
                                            <div>
                                                <span className={`${match.blueTeamScore < match.redTeamScore ? "match-score-red" : match.blueTeamScore === match.redTeamScore ? "" : "match-score-green"}`}>{match.blueTeamScore}</span>&nbsp;-&nbsp;<span className={`${match.redTeamScore < match.blueTeamScore ? "match-score-red" : match.blueTeamScore === match.redTeamScore ? "" : "match-score-green"}`}>{match.redTeamScore}</span>
                                            </div>
                                            <div>
                                                <Button className='app-header-button-login' color="inherit" onClick={() => handleClick(index)}>Parier</Button>
                                            </div>
                                        </div>
                                        <div className='match-logo-right'>
                                            <div className='match-title-team-right'>
                                                {match.redTeamName.toUpperCase()}
                                            </div>
                                            <div>
                                                <div>
                                                    <img className={`${match.redTeamScore < match.blueTeamScore ? "match-logo-img-opacity" : match.blueTeamScore === match.redTeamScore ? "match-logo-img" : "match-logo-img"}`} src={match.redTeamLogo}></img>
                                                </div>
                                                {buttonsVisible[index] && (
                                                    <div id={`vote-button-red-${index}`}>
                                                        <div className='vote-button'>
                                                            <Button className='app-header-button-login'>Vote</Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Match;
