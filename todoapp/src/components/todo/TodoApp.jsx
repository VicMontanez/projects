import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                My Todo Application
            </div>
        )
    }
}

//Login Component

class LoginComponent extends Component {
    render() {
        return (
            <div>
            User Name: <input type="text" nane="username"/>
            Password: <input type="password" name="password"/>
           </div>
        )
    }
}

export default TodoApp