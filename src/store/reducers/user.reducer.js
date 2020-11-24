import { userConstants } from '../action_types'

const initialState = {
    loading: false,
    data: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.user
            };

        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                ...initialState
            };

        case userConstants.LOGOUT:
            return {
                ...state,
                ...initialState
            };

        case userConstants.SET_USER_DATA:
            return {
                ...state,
                loading: false,
                data: action.user
            };

        default:
            return state;
    }
}