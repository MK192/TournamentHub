import {NEW_PLAYER}from '../actions/types';

export default function (state=[''], action){

    switch(action.type){

        case NEW_PLAYER:
            return action.payload;
            default:
                return state;
    }
}