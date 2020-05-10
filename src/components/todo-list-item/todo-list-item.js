import React from "react";

import "../todo-list/todo-list.css";

//destructuring {props.label}
const TodoListItem = ({label, important = false}) => {
    const importantStyle = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <div className={importantStyle}>
            <span className="todo-list-item-label">{label}</span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </div>
    );
};

export default TodoListItem;
