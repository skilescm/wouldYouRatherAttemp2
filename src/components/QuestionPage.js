import React, { Component } from 'react'
import { connect} from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {

    state = {
        filterValue: "unanswered"
    }

    checkFilter = () => {
    if (this.state.filterValue === "all") {
        return this.showAll()
    }
    if (this.state.filterValue === "answered") {
        return this.showAnswered()
    }
    if (this.state.filterValue === "unanswered") {
        return this.showUnanswered()
    }
    
    
    }

    showAnswered = () => {
        return (
            <div className='question-list'>
                            {Object.values(this.props.questions).filter(question => {  
	                                return question.optionOne.votes.filter(vote => {
	                                    return vote === this.props.authedUser
	                                        }).length > 0 || question.optionTwo.votes.filter(vote => {
                                                return vote === this.props.authedUser
                                                    }).length > 0
	                                            }).map((question, i) => {
	                                                 return <Question key={i} question={question} authedUser={this.props.authedUser}/>
                                })}
                </div>   
        )
    }

    showAll = () => {
        console.log("working")
        console.log(this.props.questions)
        return (
                        
                <div className='question-list'>
                            {Object.values(this.props.questions).map((question, i) => (
                                <Question key={i} question={question} authedUser={this.props.authedUser}/>
                            ))}
                </div>                      
        );
    }

    showUnanswered = () => {
        return (
            <div className='question-list'>
                            {Object.values(this.props.questions).filter(question => {  
	                                return question.optionOne.votes.filter(vote => {
	                                    return vote === this.props.authedUser
	                                        }).length === 0 && question.optionTwo.votes.filter(vote => {
                                                return vote === this.props.authedUser
                                                    }).length === 0
	                                            }).map((question, i) => {
	                                                 return <Question key={i} question={question} authedUser={this.props.authedUser}/>
                                })}
                </div>  
        )
    }
   

    render () {
        return (
            <div className='dashboard'> 
                <div className='question-filter'>
                        <p >Currently Showing:</p>
                        <select className='question-selector' onChange={(e) => {this.setState({filterValue: e.target.value})}}>                            
                            <option value="unanswered">Unanswered Questions</option>
                            <option value="answered">Answered Questions</option>
                            <option value="all">All Questions</option>
                        </select>
                    </div>                    
                <h3 className = 'title'> Would you rather.....</h3>  
                {this.checkFilter()}                     
            </div>
           
        )
    }
}


function mapStateToProps ({ questions, authedUser }) {
    return { questions, authedUser }
}
export default connect(mapStateToProps)(QuestionPage)