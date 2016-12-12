/**
 * Created by yarivkatz on 12/12/2016.
 */

import { SET_TASKS } from '../actions/task.actions';

const initialState = {
    tasks: []
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case SET_TASKS:
            return Object.assign({}, state, {
                tasks: action.payload
            });
        default:
            return state;
    }
}