import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink coffee" important /></li>
            <li><TodoListItem label="Create App" /></li>
        </ul>
    );
};

export default TodoList;
