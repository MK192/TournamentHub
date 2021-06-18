import axios from 'axios';
import {FETCH_USER,FETCH_TOURNAMENTS,FETCH_ALL_TOURNAMENTS,NEW_PLAYER} from './types';


export const fetchUser=()=>async dispatch=>{
   
const res=await axios.get('/api/current_user');

dispatch({type:FETCH_USER, payload:res.data});

};

export const handleToken=(token)=>async dispatch=>{

    const res=await axios.post('/api/stripe',token);
    dispatch({type:FETCH_USER, payload:res.data});
};

export const CreateTournament=(values,history)=>async dispatch=>{
    
   
const res=await axios.post('/api/createTournament',values);
history.push('/dashboard');
dispatch({type:FETCH_USER, payload:res.data});

};

export const fetchMyTournaments=()=>async dispatch=>{
    const res=await axios.get('/api/createTournament');
    dispatch({type : FETCH_TOURNAMENTS,payload : res.data});
};
export const fetchAllTournaments=()=>async dispatch=>{
    const res=await axios.get('/api/findTournament');
    dispatch({type : FETCH_ALL_TOURNAMENTS,payload : res.data});
};

export const fetchNewPlayer=(values)=>async dispatch=>{
    const res=await axios.post('/api/newPlayer',values);
    dispatch({type : NEW_PLAYER,payload : res.data});
}