import { userConstants } from '../action_types';
import { alertActions } from '../actions';
import { userService } from '../../services';

export default {
    login,
    logout,
    initializeUserData,
    getAll,

};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(success({ email: 'test', role: 'test' }));
                    // dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function initializeUserData() {
    return dispatch => {
        const token = userService.getToken()

        userService.getUserDataFromToken(token)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(success({ email: 'test', role: 'test' }));
                    // dispatch(failure(null));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function success(user) { return { type: userConstants.SET_USER_DATA, user } }
    function failure(user) { return { type: userConstants.SET_USER_DATA, user } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
