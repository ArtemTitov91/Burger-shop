import useFetch from "../../hooks/useFetch";
import { url } from '../../utils/urlQuery/urlQuery';

export const POST_REGISTRATION_REQUEST = 'POST_REGISTRATION_REQUEST';
export const POST_REGISTRATION_SUCCESS = 'POST_REGISTRATION_SUCCESS';
export const POST_REGISTRATION_FAILED = 'POST_REGISTRATION_FAILED';

export const POST_AUTHORIZATION_REQUEST = 'POST_AUTHORIZATION_REQUEST';
export const POST_AUTHORIZATION_SUCCESS = 'POST_AUTHORIZATION_SUCCESS';
export const POST_AUTHORIZATION_FAILED = 'POST_AUTHORIZATION_FAILED';

export const queryRegistration = (obj) => {
    return (dispatch) => {
        useFetch(
            `${url}auth/register`,
            dispatch,
            POST_REGISTRATION_SUCCESS,
            POST_REGISTRATION_FAILED,
            POST_REGISTRATION_REQUEST,
            "POST",
            JSON.stringify(obj)
        )
    }
}

export const queryAuthorization = (obj) => {
    return (dispatch) => {
        useFetch(
            `${url}auth/login`,
            dispatch,
            POST_AUTHORIZATION_SUCCESS,
            POST_AUTHORIZATION_FAILED,
            POST_AUTHORIZATION_REQUEST,
            "POST",
            JSON.stringify(obj)
        )
    }
}