import React from "react";
import ReactDOM from "react-dom";

import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import './app.css';

const App = () => {

    const todoData = [
        {id: 0, label: 'Drink coffee', important: false},
        {id: 1, label: 'Create App', important: true},
        {id: 2, label: 'Have a lunch', important: false},
        {id: 3, label: 'Go to SF', important: true}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
// ReactDOM.render(<App/>, document.getElementById('app'));
