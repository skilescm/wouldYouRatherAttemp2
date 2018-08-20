import { RECEIVE_REDIRECT } from '../actions/redirect'

export default function redirect (state = null, action) {
    switch (action.type) {
        case RECEIVE_REDIRECT :
            return action.id
        default :
            return state
    }
}