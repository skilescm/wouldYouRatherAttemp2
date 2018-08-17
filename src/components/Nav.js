import React, { Component } from 'react'
import { connect} from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import * as action from '../actions/autheduser'



class Nav extends Component {

    signOut = () => {
        this.props.setAuthedUser("");
        this.props.history.push('/')
    }

   
    render () { 
        console.log(this.props.authedUser, "sup")
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

function mapStateToProps ({ authedUser }) {
    return {authedUser}
        
    

}


export default withRouter(connect(mapStateToProps, action)(Nav))






