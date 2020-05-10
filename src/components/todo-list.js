import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = ({todos}) => {

    const elems = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                {/*spread operation -> <TodoListItem label={item.label} important={item.important}/>*/}
                <TodoListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul>{elems}</ul>
    );
};

export default TodoList;
