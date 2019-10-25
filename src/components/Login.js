import React, { Component } from 'react'
import * as request from 'superagent'
import { url } from '../constants'
import { login } from '../actions'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        username: "",
        userpassword: ""
    }
    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    onChangeUserpassword = (event) => {
        this.setState({
            userpassword: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault()

        console.log("try to signup", this.state.username, "and", this.state.userpassword)
        // this.setState({
        //     username: "",
        //     password: ""
        // })
        request.post(`${url}/login`)
            .send({
                email: this.state.username,
                password: this.state.userpassword
            })
            
            .then(result => {console.log("result..", result.body)
            this.props.login(result.body.jwt)
        })
            .catch(error => console.log('error', error))
    }
    render() {
        if (this.props.jwt !== "") return 'user is not logged in '
        console.log(this.props.jwt)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                          name="username"
                          type="text"
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          placeholder="username"></input>
                      <input
                        name="password"
                        type="text"
                        onChange={this.onChangeUserpassword}
                        value={this.state.userpassword}
                        placeholder="password"></input>
                    <button type="submit">login up</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(reduxstate) {

    console.log('mstp login ', reduxstate)
    return {

        jwt: reduxstate.user
    }

}
export default connect(mapStateToProps, { login })(Login)
