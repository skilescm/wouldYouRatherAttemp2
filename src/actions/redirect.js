export const RECEIVE_REDIRECT = 'RECEIVE_REDIRECT'

export function receiveRedirect (route) {
    return {
        type: RECEIVE_REDIRECT,
        route,
    }
}