import React, { Component } from 'react';
import ControlPanel from './smart/ControlPanel';
import VisibleTodoList from './smart/VisibleTodoList';

class App extends Component {
    render() {
        return (
            <div>
                <ControlPanel />
                <VisibleTodoList />
            </div>
        );
    }
}

export default App;