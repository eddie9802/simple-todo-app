import React from 'react';
import Header from './Header.js';
import InputToDo from './InputToDo.js';
import ToDoList from './ToDoList.js';
import {v4 as uuidv4} from 'uuid';

class ToDoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Do the washing up",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Sploob around for a bit",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Walk the dog",
                completed: false
            }
        ],
    };
    
    handleClick = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    handleDelete = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }


    addToDoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        return (
            <div className="container">
                < Header/>
                < InputToDo title={this.state.title} addToDoProps={this.addToDoItem}/>
                < ToDoList todos={this.state.todos} handleChangeProps={this.handleClick} handleDeleteProps={this.handleDelete}/>
            </div>
        );
    }
}
export default ToDoContainer;