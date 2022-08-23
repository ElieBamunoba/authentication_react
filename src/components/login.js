import React, { Component } from 'react';


class Login extends Component {

    state = {
        credentials: {
            username: '', password: '',
        }
    }

    login = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.credentials),

            }
        )
            .then(data => data.json)
            .then(
                data => {
                    console.log(data.token);
                }
            ).catch(err => {
                console.log(err)
            })



    }
    inputChange = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }


    render() {
        return (
            <div >
                <h1>Login User form</h1>

                <label>
                    username:
                    <input type='text'
                        placeholder='username' name='username'
                        value={this.state.credentials.username}
                        onChange={this.inputChange}
                    />
                </label>
                <br />
                <label>
                    password:
                    <input type='password'
                        placeholder='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.inputChange}
                    />
                </label>
                <br />
                <button onClick={this.login}>Login</button>
            </div>
        );
    }

}

export default Login; 