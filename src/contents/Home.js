import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/portfolio pic.jpeg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Dinesh Giri','I am a React js Developer']} speed={90} eraseDelay={600}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    