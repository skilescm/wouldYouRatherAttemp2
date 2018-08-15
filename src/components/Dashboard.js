import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import Home from './Home'
import QuestionPage from './QuestionPage'


class Dashboard extends Component {


    render () {

        if (this.props.authedUser === "") {
            return <Redirect to='/' exact component={Home} />
        }

        return (
            <div className='dashboard'>
                <div className='salutation'>Hello, {this.props.authedUser}!</div>
                <QuestionPage />
                
            </div>
        )
    }
}


function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser,
        users,
        
    }
}
export default connect(mapStateToProps)(Dashboard)