import React, { Component } from 'react'
import {url} from '../constants'

export default class Chatroom extends Component {
    state = {
        messages:[]
    }
    source = new EventSource(`${url}/stream`)
    componentDidMount(){

        console.log("component did of chatroom component")
        this.source.onmessage = event => {

            console.log('Got a message!',event)
            const messages = JSON.parse(event.data)
            this.setState({
                messages
            })
        }
        //console.log("source",this.source)
    }
    render() {
        console.log("local state",this.state)
        return (
            <div>
                Hello from chatroom component 
                <ul>
                    {
                        this.state.messages.map(message => 
                        <li key={message.id}>{message.message}</li>)
                    }
                </ul>
            </div>
        )
    }
}
