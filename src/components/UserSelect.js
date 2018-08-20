import React, { Component } from 'react'
import { connect} from 'react-redux'
import  * as action from '../actions/autheduser'
import { withRouter } from 'react-router-dom'
import * as avatar from '../images'


class UserSelect extends Component {
    
       
      
    handleClick = (user) => {
        this.props.setAuthedUser(user)
        this.props.redirect === "" ? this.props.history.push("/dashboard") : this.props.history.push(this.props.redirect)
    }
      

    render () {
        return (
            <div>
                <ul className='user-list'>
                    {Object.values(this.props.users).map((user) => (
                        <li className='user-entry' key={user.id} onClick={() => {this.handleClick(user.id)}}>                            
                            <img className='avatar' src={avatar[user.avatarURL]} alt={user.name}/>  
                            {user.name}                      
                        </li>
                    ))}
                 </ul>
                
            </div>
        )
    }
}


function mapStateToProps ({ users, redirect }) {
    return {
        users,
        redirect
    }
}
export default withRouter(connect(mapStateToProps, action)(UserSelect))