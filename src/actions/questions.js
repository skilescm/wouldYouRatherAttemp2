export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE = 'ADD_VOTE'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion (newQuestion) {
    return {
        type: ADD_QUESTION,
        newQuestion,
    }
}

export function addVote (questions, users) {
    return {
        type: ADD_VOTE,
        questions,
        users,
    }
}