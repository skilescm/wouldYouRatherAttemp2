import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Question extends Component {



    render () {

        if (this.props.authedUser === "") {
            return <Redirect to='/' />
        }

        const {question} = this.props;
        return (
            <div className='question-card'>                   
                        <Link to={`/questions/${question.id}`} key={question.id} className='question'>
                            <div className='optionOne'>
                                    {question.optionOne.text}
                            </div>
                            <div className='optionTwo'>
                                    {question.optionTwo.text}
                            </div>
                        </Link>            
            </div>
        )
    }
}


function mapStateToProps ({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
    
}
export default withRouter(connect(mapStateToProps)(Question))