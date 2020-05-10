import React from "react";

import '../todo-list/todo-list.css';

const SearchPanel = () => {
    return (
        <div>
            <input className="form-control search-input"
                   type="text" placeholder='search'/>
        </div>
    );
};

export default SearchPanel;
