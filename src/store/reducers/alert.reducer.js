import { alertConstants } from '../action_types'

const initialState = {
    message: '',
    type: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            console.log(action)
            return {
                message: action.message,
                type: 'SUCCESS'
            };

        case alertConstants.ERROR:
            console.log(action)
            return {
                message: action.message,
                type: 'ERROR'
            };

        case alertConstants.CLEAR:
            console.log(action)
            return initialState;

        default:
            return state;
    }
}