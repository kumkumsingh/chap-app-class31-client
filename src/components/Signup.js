import React, { Component } from 'react'
import * as request from 'superagent'
import {url} from '../constants' 

export default class Signup extends Component {
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
        console.log('userpass',event.target.value);
        
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
        request.post(`${url}/user`)
        .send({
            email : this.state.username,
            password: this.state.userpassword
        })
        .catch (error =>  console.log('error',error) )

    }
    render() {  
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
                        <button type="submit">sign up</button>
                </form>
            </div>
        )
    }
}
