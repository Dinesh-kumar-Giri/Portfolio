import React, { Component } from 'react';
import Codechef from '../img/codechef-32.png';
// import profilepic from '../img/portfolio pic.jpeg';



class Social extends Component {
    render() {
        return (
            <div class="social">
                {/* <br /> */}
            <a href="https://github.com/Dinesh-kumar-Giri" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/i.giri___/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/i-giri/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
            {/* <a href="https://www.linkedin.com/in/i-giri/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-code-simple"></i></a> */}
            <a href="https://www.codechef.com/users/dineshgiri_123" target="_blank" rel="noopener noreferrer"><img src={ Codechef} alt="" srcset="" /></a>
           
           
            
            </div>
            )
        }
    }
    
export default Social
    