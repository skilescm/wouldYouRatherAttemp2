import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION :
            return {
                ...state,
                ...action.newQuestion,
            }
        case ADD_VOTE :
            return {
                ...state,
                ...action.questions,
            }
        default: 
            return state
        }        
    }