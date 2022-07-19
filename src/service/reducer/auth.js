import {
    POST_REGISTRATION_REQUEST,
    POST_REGISTRATION_SUCCESS,
    POST_REGISTRATION_FAILED,
    POST_AUTHORIZATION_REQUEST,
    POST_AUTHORIZATION_SUCCESS,
    POST_AUTHORIZATION_FAILED
} from '../action/auth.js';

export const authStore = {
    registration: null,
    registrationRequest: false,
    registrationFailed: false,

    authorization: null,
    authorizationRequest: false,
    authorizationFailed: false,
}

export const authReducer = (state = authStore, action) => {
    switch (action.type) {
        case POST_REGISTRATION_REQUEST: {
            return {
                ...state,
                registrationRequest: true
            };
        }
        case POST_REGISTRATION_SUCCESS: {
            return { ...state, registrationFailed: false, registration: action.data, registrationRequest: false };
        }
        case POST_REGISTRATION_FAILED: {
            return { ...state, registrationFailed: true, registrationRequest: false };
        }
        case POST_AUTHORIZATION_REQUEST: {
            return {
                ...state,
                authorizationRequest: true
            };
        }
        case POST_AUTHORIZATION_SUCCESS: {
            return { ...state,authorizationFailed: false, authorization: action.data, authorizationRequest: false };
        }
        case POST_AUTHORIZATION_FAILED: {
            return { ...state, authorizationFailed: true, authorizationRequest: false };
        }
        default: {
            return state;
        }
    }
}