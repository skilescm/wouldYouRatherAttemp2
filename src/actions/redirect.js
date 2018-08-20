export const RECEIVE_REDIRECT = 'RECEIVE_REDIRECT'

export function receiveRedirect (id) {
    return {
        type: RECEIVE_REDIRECT,
        id,
    }
}