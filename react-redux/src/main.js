/**
 * react hello world
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store/store';
import CreateTask from './components/CreateTask.component.js';
import TaskList from './components/TaskList.component';

class App extends React.Component{

    render(){
        return (
            <div>
                <CreateTask/>
                <TaskList />
            </div>
        )
    }
}

ReactDom.render(<Provider store={createStore()}><App /></Provider>, document.getElementById('content'));


