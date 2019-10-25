import React from 'react';
import Chatroom from './components/Chatroom'
import './App.css';
import ChatroomForm from './components/ChatroomForm'
import SignUpForm from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>
    <h1> Kumkum Chat App </h1>
    <Chatroom/>
    <ChatroomForm/>
    <SignUpForm/>
    <Login/>
    </div>
  );
}

export default App;
