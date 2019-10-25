import React, { Component } from 'react'
import {url} from '../constants'
import {connect} from 'react-redux'
import {addMessages } from '../actions'

class Chatroom extends Component {
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
            this.props.addMessages(messages)
        }
        //console.log("source",this.source)
    }
    render() {
        if(!this.props.messages) return 'wait for message'
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
function mapStateToProps (reduxstate) {

    console.log('mstp ofchatroom ',reduxstate)
    return {

        messages : reduxstate.message
    }
    
}
const mapDispatchToProps = { addMessages }
export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)