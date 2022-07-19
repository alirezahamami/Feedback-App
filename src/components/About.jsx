import React from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'

function About() {
  
    return (
        <> <Header /> 
        <div className='about container'>
            <h1>This App is created by Alireza</h1>
            <p>This is a React app to leave feedback for some products or service!</p>
            <p>version 1.0.0</p>
            <p>
                <NavLink to='/'>
                    Back to the homepage
                </NavLink>
            </p>
        </div>
    </>
    )
}

export default About
