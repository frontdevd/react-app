import React from "react";

import "../todo-list/todo-list.css";

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header">
            <h1>Todo List</h1>
            <p className="text-right text-18">{toDo} more to do, {done} done</p>
        </div>
    );
};

export default AppHeader;

