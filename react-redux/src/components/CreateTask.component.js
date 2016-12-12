/**
 * Created by yarivkatz on 12/12/2016.
 */


import React from 'react';
import { connect } from 'react-redux';
import { setTasks } from '../redux/actions/task.actions';

@connect(
    state => ({
        tasks: state.tasks
    }),
    dispatch => ({
        setTasks: (tasks) => dispatch(setTasks(tasks))
    })
)
export default class CreateTask extends React.Component{

    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }

    addTask(event){
        var newTasks = this.props.tasks.splice(0);
        newTasks.push(this.greetingInput.value);
        this.props.setTasks(newTasks);
        event.preventDefault();
    }

    render(){
        console.log('rendered CreateTask');
        return (
            <form onSubmit={this.addTask}>
                <input type="text" ref={(domObj) => { this.greetingInput = domObj}} />
            </form>
        )
    }
}