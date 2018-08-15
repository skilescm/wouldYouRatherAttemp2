import React, { Component } from 'react'
import { connect} from 'react-redux'

class Leaderboard extends Component {
    render () {
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
                            <img src={user.avatarURL} alt={user.name} className='leaderboard-avatar' />
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


function mapStateToProps ({ users }) {

    let leaderboard = []

    Object.keys(users).map((userId) => {
        leaderboard.push({
        id: userId,
        name: users[userId].name,
        avatar: users[userId].avatarURL,
        questions: users[userId].questions.length,
        answers: Object.keys(users[userId].answers).length
        })
    })
    console.log(leaderboard, "answers")
    leaderboard.sort(function (a, b) {
        return (b.questions + b.answers) - (a.questions + a.answers)
      })

    return {
        leaderboard,
        users,
    }
}
export default connect(mapStateToProps)(Leaderboard)