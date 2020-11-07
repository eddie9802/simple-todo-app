import React from 'react';
import ToDoItem from './ToDoItem.js'

const ToDoList = (props) => {
    return(
        <ul>
            {props.todos.map(todo => (
                <ToDoItem todo={todo}  handleChangeProps={props.handleChangeProps} key={todo.id}  handleDeleteProps={props.handleDeleteProps}/>
            ))}
        </ul>
    );
}
export default ToDoList;