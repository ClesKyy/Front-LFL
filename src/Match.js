import React from 'react';
import './App.css';
import { Card, CardContent } from '@mui/material';
import moment from 'moment';

const game = {
    redTeamScore: 4,
    blueTeamScore: 3
}

function Match(props) {
    return (
        <div>
            <div className='match'>
                <div className='match-row'>
                    <div className='match-card'>
                        <div className="matchDate">
                            {moment(props.matches.matchDate).format('DD/MM/YYYY')}
                        </div>
                        <Card>
                            <CardContent>
                                {props.matches.matches.map((match, index) => (
                                    <div className='match-card-content'>
                                        <div className='match-logo-left'>
                                            <div>
                                                <img className='match-logo-img' src={match.blueTeamLogo}></img>
                                            </div>
                                            <div className='match-title-team-left'>
                                                {match.blueTeamName}
                                            </div>
                                        </div>
                                        <div className='match-logo-middle'>
                                            <span className={`${match.blueTeamScore < match.redTeamScore ? "score-red" : match.blueTeamScore === match.redTeamScore ? "" : "score-green"}`}>{match.blueTeamScore}</span>&nbsp;-&nbsp;<span className={`${match.redTeamScore < match.blueTeamScore ? "score-red" : match.blueTeamScore === match.redTeamScore ? "" : "score-green"}`}>{match.redTeamScore}</span>
                                        </div>
                                        <div className='match-logo-right'>
                                            <div className='match-title-team-right'>
                                                {match.redTeamName}
                                            </div>
                                            <div>
                                                <img className='match-logo-img' src={match.redTeamLogo}></img>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Match;
