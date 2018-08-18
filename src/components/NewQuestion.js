import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import * as actions from '../actions/questions'
import * as redirect from '../actions/redirect'

class NewQuestion extends Component {

    goBack = () => {
        return  <Redirect to='/'/>
    }

    state = {
        optionOne: '',
        optionTwo: '',
    }

    generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    submitClick = () => {

        if (this.state.optionOne === '' || this.state.optionTwo === '') {
            return
        }

        let questionId = this.generateId()
        let timestamp = Date.now()

            const newQuestion = {
                [questionId]: {
                    id: questionId,
                    author: this.props.authedUser,
                    timestamp: timestamp,
                    optionOne: {
                      votes: [],
                      text: this.state.optionOne,
                    },
                    optionTwo: {
                      votes: [],
                      text: this.state.optionTwo,
                    }
                  },
            }

        this.props.addQuestion(newQuestion)
    }

    render () {

        if (this.props.authedUser === "") {
            this.props.receiveRedirect("/dashboard")
            return this.goBack()
        }       

        
        return (
            <div>
                <h3 className = 'salutation'> Would You Rather....</h3>
                <div className='new-question-box'>
                    <div className='new-option1'>
                        <p>Option 1</p>
                        <input type='text' onChange={(e) => {this.setState({optionOne: e.target.value})}} />
                    </div>
                    <div className='new-option2'>
                        <p>Option 2</p>
                        <input type='text' onChange={(e) => {this.setState({optionTwo: e.target.value})}}/>
                    </div>
                </div>
                <div className='button-container'>
                <button className='submit-button' type='submit' onClick={() => {this.submitClick()}}>
                    Submit
                </button>
                </div>
            </div>
        )
    }
}


function mapStateToProps ({ authedUser, questions }) {
    return {
        authedUser,
        questions,
    }
}
export default connect(mapStateToProps, actions, redirect )(NewQuestion)