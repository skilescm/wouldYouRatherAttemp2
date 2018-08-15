import React, { Component } from 'react'
import { connect} from 'react-redux'
import  * as actions from '../actions/autheduser'
import { withRouter } from 'react-router-dom'
import * as avatar from '../images'


class UserSelect extends Component {
    
    
      
    handleClick = (user) => {
        console.log(user)      
        this.props.setAuthedUser(user)
        this.props.history.push('/dashboard') 
    }
      

    render () {
        console.log(this.props, "userSelect")
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


function mapStateToProps ({ users }) {
    return {users}
}
export default withRouter(connect(mapStateToProps, actions)(UserSelect))