import {FETCH_ALL_TOURNAMENTS}from '../actions/types';

export default function (state=[], action){

    switch(action.type){

        case FETCH_ALL_TOURNAMENTS:
            return action.payload;
            default:
                return state;
    }
}