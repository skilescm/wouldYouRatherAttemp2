import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import * as actions from '../actions/questions'
import Home from './Home'

class ViewQuestion extends Component {
    
    castVote = (questionId, optionNumber) => {
        const questions = this.props.questions
        const curQuestion = questions[questionId]
        const users = this.props.users
        const curUser = users[this.props.authedUser]
        curQuestion[optionNumber].votes.push(this.props.authedUser)
        curUser.answers[questionId] = optionNumber

        this.props.addVote(questions, users)

    }

    checkVote = (questionId) => {
        const question = this.props.questions[questionId]
        let optionOneVote = question.optionOne.votes.filter(vote => {
            return vote === this.props.authedUser
        })
        let optionTwoVote = question.optionTwo.votes.filter(vote => {
            return vote === this.props.authedUser
        })
        if (optionTwoVote.length > 0 || optionOneVote.length > 0) {
            return this.renderAnswer(question)
        }
        return (
            this.renderQuestion(question, questionId)
        );

    }

    renderQuestion = (question, questionId) => {        
        const {optionOne, optionTwo} = question
        return (
            <div className='dashboard'>
                <p className='salutation'>You have not answered this question</p>
                <div className='question'> 
                    <div className='optionOne' onClick={() => this.castVote(questionId, "optionOne")}>
                        {optionOne.text}
                    </div>
                    <div className='optionTwo' onClick={() => this.castVote(questionId, "optionTwo")}>
                        {optionTwo.text}
                    </div>
                </div>
                <div className='question'>
                    <div className='optionOne-stats'>
                        <p>Total vote count: {optionOne.votes.length}</p>
                        <p>Percentage of votes: {optionOne.votes.length * 100.00/(optionOne.votes.length + optionTwo.votes.length)}%</p>
                    </div>
                    <div className='optionTwo-stats'>
                        <p>Total vote count: {optionTwo.votes.length}</p>
                        <p>Percentage of votes: {optionTwo.votes.length * 100.00/(optionOne.votes.length + optionTwo.votes.length)}%</p>
                    </div>                    
                </div>
                <div className='question-author'>
                    <p>Question submitted by user: {question.author}</p>
                </div>
            </div>
        );
    }

    renderAnswer = (question) => {
        const {optionOne, optionTwo} = question
        return (            
            //show vote counts for each and the percentages for each
            //highlight selected option that authedUser selected  
            //make sure to set 
            <div className='dashboard'>
                <p className='salutation'>You have answered this question</p>
                <div className='question'>          
                    <div className='optionOne'>
                        {optionOne.text}                
                    </div>
                    <div className='optionTwo'>
                        {optionTwo.text}
                    </div>
                </div>
                <div className='question'>
                    <div className='optionOne-stats'>
                        <p>Total vote count: {optionOne.votes.length}</p>
                        <p>Percentage of votes: {optionOne.votes.length * 100.00/(optionOne.votes.length + optionTwo.votes.length)}%</p>
                    </div>
                    <div className='optionTwo-stats'>
                        <p>Total vote count: {optionTwo.votes.length}</p>
                        <p>Percentage of votes: {optionTwo.votes.length * 100.00/(optionOne.votes.length + optionTwo.votes.length)}%</p>
                    </div>                    
                </div>
                <div className='question-author'>
                    <p>Question submitted by user: {question.author}</p>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.authedUser === "") {
            return <Redirect to='/' exact component={Home} />
        }
        
        const questionId = this.props.location.pathname.split('/')[2]
        return (
            this.checkVote(questionId)
            
        );
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users,
    }
}

export default withRouter(connect(mapStateToProps, actions)(ViewQuestion));
