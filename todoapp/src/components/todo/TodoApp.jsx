import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

//Login Component

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'username',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleUsernameChange(event) {
        console.log(event.target.value);
        this.setState({username: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }
    render() {
        return (
            <div>
            User Name: <input type="text" nane="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <button>Login</button>
           </div>
        )
    }
}

export default TodoApp