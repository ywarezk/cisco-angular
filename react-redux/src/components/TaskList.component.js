/**
 * Created by yarivkatz on 12/12/2016.
 */


import React from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({
        tasks: state.tasks
    })
)
export default class TaskList extends React.Component {
    render(){
        return (
            <ul>
                {
                    this.props.tasks.map(function(task){
                        return (
                            <li>
                                {task}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}