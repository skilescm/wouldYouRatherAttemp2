import React, { Component } from 'react'
import { connect} from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {

    state = {
        filterValue: "all"
    }

    checkFilter = () => {        
        {this.state=== "unanswered" ? this.showUnanswered() :this.state=== "answered" ? this.showAnswered() : this.showAll()}
    }

    showAnswered = () => {
        return 
    }

    showAll = () => {
        console.log("working")
        console.log(this.props.questions)
        return (
            console.log("all")
            /*<div>
                <div className='question-list'>
                        {Object.values(this.props.questions).map((question, i) => (
                            <Question key={i} question={question} authedUser={this.props.authedUser}/>
                        ))}
                </div>                
            </div> */
        );
    }

    showUnanswered = () => {
        return console.log("unanswered")
    }
   

    render () {
        console.log(this.props.authedUser, "yeap")
        console.log(this.props.questions, "questions bro")
        return (
            <div className='dashboard'> 
                <div className='question-filter'>
                        <p >Currently Showing:</p>
                        <select className='question-selector' onChange={(e) => {this.setState({optionOne: e.target.value})}}>
                            <option value="all">All Questions</option>
                            <option value="answered">Answered Questions</option>
                            <option value="unanswered">Unanswered Questions</option>
                        </select>
                    </div>                    
                <h3 className = 'title'> Would you rather.....</h3>                       
            </div>,
            this.checkFilter()
        )
    }
}


function mapStateToProps ({ questions, authedUser }) {
    return { questions, authedUser }
}
export default connect(mapStateToProps)(QuestionPage)