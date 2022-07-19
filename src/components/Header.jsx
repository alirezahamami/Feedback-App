import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {

    return (
        <header>
            <div className='container'>
                <h2>
                    <span>
                        <NavLink to='/'>
                         Homepage
                        </NavLink>
                    </span>
                    <span>
                        <NavLink to='/about'>
                                 About
                        </NavLink>
                    </span>
                </h2>
            </div>
        </header>
    )
}

export default Header