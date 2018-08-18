import { getInitialData } from '../utils/api'
import { receiveUsers} from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/autheduser'
import { receiveRedirect } from '../actions/redirect'
import { showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = ''
const route = ''

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
       return getInitialData()
       .then(({ users, questions }) => {
           dispatch(receiveUsers(users))
           dispatch(receiveQuestions(questions))
           dispatch(setAuthedUser(AUTHED_ID))
           dispatch(receiveRedirect(route))
           dispatch(hideLoading())

       })
    }
}