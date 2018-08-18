import React, { Component } from 'react'
import { connect} from 'react-redux'
import * as avatar from '../images'
import { withRouter, Redirect } from 'react-router-dom'
import * as redirect from '../actions/redirect'

class Leaderboard extends Component {

    goBack = () => {
        return  <Redirect to='/'/>
    }

    
    render () {   
        if (this.props.authedUser === "") {
            this.props.receiveRedirect("/leaderboard")
            return this.goBack()
         
        }

        return (          
            <div className='container'>
                <h3 className = 'salutation'>Here are your leaders!</h3>
                <div className='leaderboard'>
                        <ul className='leaderboard-list'>
                            <li className='leaderboard-entry'>
                                Rank
                            </li>
                            <li className='leaderboard-entry'>
                                Avatar
                            </li>
                            <li className='leaderboard-entry'>
                                Name
                            </li>
                            <li className='leaderboard-entry'>
                                Answered
                            </li>
                            <li className='leaderboard-entry'>
                                Submitted
                            </li>
                        </ul>
                    {this.props.leaderboard.map((user, i) => (
                        <ul key={i+1} className='leaderboard-list'>
                            <li className='leaderboard-entry' key={i+1}>
                                {i+1}
                            </li>
                            <li key={user.name+"avatar"}className='leaderboard-entry'>
                            <img src={avatar[user.avatar]} alt={user.name} className='avatar' />
                            </li>   
                           
                            <li key={user.id} className='leaderboard-entry'>
                                {user.name}
                            </li>
                            <li key={user.id+"answers"} className='leaderboard-entry'>
                               {user.answers}
                            </li>  
                            <li key={user.id+"questions"} className='leaderboard-entry'>
                                {user.questions}
                            </li> 
                         </ul>
                    ))}
                </div>
            </div>
        )
    }
}


function mapStateToProps ({ users, authedUser }) {

    let leaderboard = []

    Object.keys(users).map((userId) => {        
       return leaderboard.push({
        id: userId,
        name: users[userId].name,
        avatar: users[userId].avatarURL,
        questions: users[userId].questions.length,
        answers: Object.keys(users[userId].answers).length
        })
    })
    leaderboard.sort(function (a, b) {
        return (b.questions + b.answers) - (a.questions + a.answers)
      })

    return {
        leaderboard,
        users,
        authedUser,
    }
}
export default withRouter(connect(mapStateToProps, redirect)(Leaderboard))