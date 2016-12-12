/**
 * Created by yarivkatz on 12/12/2016.
 */


export const SET_TASKS = 'SET_TASKS';

export function setTasks(tasks){
    return {
        type: SET_TASKS,
        payload: tasks
    }
}