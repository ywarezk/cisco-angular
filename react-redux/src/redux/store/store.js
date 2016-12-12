/**
 * Created by yarivkatz on 12/12/2016.
 */


import { createStore as createReduxStore } from 'redux';
import reducer from '../reducers/task.reducer';


export default function createStore(){
    return createReduxStore(reducer);
}