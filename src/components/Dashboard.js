import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import QuestionPage from './QuestionPage'
import * as redirect from '../actions/redirect'


class Dashboard extends Component {

    componentDidMount () {
        this.props.receiveRedirect("dashboard")
    }


    render () {
        console.log(this.props.redirect, "dashboard redirect value")
        if (this.props.authedUser === "") {
            return <Redirect to='/' />
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
export default withRouter(connect(mapStateToProps, redirect)(Dashboard))