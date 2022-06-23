import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Electronics & communication engineering" where="FGIET Raebareli" from="July 2018" to="July 2022"/>
            <Widecard title="HSC" where="S A M Inter College Saharanpur" Where="Saharanpur" from="2015" to="2017"/>
            <Widecard title="SSC |Secondary School " where="S A M Inter College Saharanpur" Where="Saharanpur" from="2014 "to="2015"/>
            </div>
            )
        }
    }
    
export default Education
    