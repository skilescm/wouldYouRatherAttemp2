import React, { Component } from 'react'
import { connect} from 'react-redux'
import  * as actions from '../actions/autheduser'
import { withRouter } from 'react-router-dom'

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
                <h3 className = 'center'> User Selection has Loaded</h3>
                <ul className='dashboard-list'>
                    {Object.values(this.props.users).map((user) => (
                        <li key={user.id} onClick={() => {this.handleClick(user.id)}}>
                            {user.name}
                            <img src={user.avatar} alt={user.name}/>                        
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