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
                        <Card>
                            <CardContent>
                                <div className="matchDate">
                                    {moment(props.matches.matchDate).format('DD/MM/YYYY')}
                                </div>
                                {props.matches.matches.map((match, index) => (
                                    <div className='match-card-content'>
                                        <div className='match-logo-left'>
                                            <div>
                                                <img className='match-logo-img' src='https://images.prismic.io/liguefrlol/b9006bd4-f32a-4f1b-9adc-617160789bbc_AEGIS_logo_shield_yellow.png?auto=compress,format'></img>
                                            </div>
                                            <div className='match-title-team-left'>
                                            {match.blueTeamName}
                                            </div>
                                        </div>
                                        <div className='match-logo-middle'>
                                        <span className={`${match.blueTeamScore < match.redTeamScore ? "score-red" : match.blueTeamScore === match.redTeamScore ? "" : "score-green"}`}>{match.blueTeamScore}</span>&nbsp;-&nbsp;<span className={`${match.redTeamScore < match.blueTeamScore ? "score-red" : "score-green"}`}>{match.redTeamScore}</span>
                                        </div>
                                        <div className='match-logo-right'>
                                            <div className='match-title-team-right'>
                                                {match.redTeamName}
                                            </div>
                                            <div>
                                                <img className='match-logo-img' src='https://images.prismic.io/liguefrlol/b9006bd4-f32a-4f1b-9adc-617160789bbc_AEGIS_logo_shield_yellow.png?auto=compress,format'></img>
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
