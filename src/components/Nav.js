import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import {setAuthedUser} from '../actions/autheduser'
import {receiveRedirect} from '../actions/redirect'



class Nav extends Component {

    signOut = () => {
        this.props.setAuthedUser("");
        this.props.receiveRedirect("");
        this.props.history.push("/")
    }

   
    render () { 
        console.log(this.props.authedUser, "sup")
        console.log(this.props.redirect, "nav redirect value")
        return (
            <nav className='nav'>
                <ul className='site-nav'>
                    <li>
                        <NavLink to='/dashboard' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
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
                    <li >
                       <button className='sign-out' onClick={() => {this.signOut()}} >
                            Sign Out
                        </button>            
                    </li>
                </ul>
            </nav>
        )
    }
}

const actions = {setAuthedUser, receiveRedirect}

function mapStateToProps ({ authedUser, redirect }) {
    return {
        authedUser,
        redirect
        
    }
        
    

}


export default withRouter(connect(mapStateToProps, actions )(Nav))






