import React, { Component } from 'react'
import * as request  from 'superagent'
import {url} from '../constants'

export default class ChatroomForm extends Component {
    state = {
        message : ""
    }
    onChange = event => {
        console.log("onchange")
        this.setState({
            message:event.target.value
        })
    }
    onSubmit = (event) => {

        event.preventDefault()
        this.setState({
            message:""
        })
        console.log("onsumbmit of chatroom")

        request.post(`${url}/message`)
        .send({message:this.state.message})
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="messageForm" type="text" onChange={this.onChange}
                     value = { this.state.message} placeholder = "Typeurmessagehere"></input>
                <button type='submit'>send message</button>
                </form>
            </div>
        )
    }
}

