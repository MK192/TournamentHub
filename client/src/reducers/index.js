import {combineReducers}from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import tournamentReducer from './tournamentReducer';
import allTournaments from './allTournaments';
import newPlayer from './newPlayer';

export default combineReducers ({
 auth:authReducer,
 form : reduxForm,
 myTournament : tournamentReducer,
 allTournaments: allTournaments,
 newPlayer : newPlayer,
});