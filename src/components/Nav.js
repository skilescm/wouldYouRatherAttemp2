import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


export function Nav () {
    return (
        <nav className='nav'>
            <ul className='site-nav'>
                <li>
                    <NavLink to='/dashboard' activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
            </ul>
            <ul className='auth'>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Sign Out
                    </NavLink>                    
                </li>
            </ul>
        </nav>
    )
}


