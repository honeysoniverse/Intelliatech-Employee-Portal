import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actions'



export const loginSuccess = (paylod) => {
    return {
        type: LOGIN_SUCCESS,
        paylod: paylod
    }
}
export const loginFailure = (paylod) => {
    // console.log('action fail',paylod);
    return {
        type: LOGIN_FAILURE,
        paylod: paylod

    }
}