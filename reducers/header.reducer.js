import Actions from './../actions/header/'
import {RESET_STORE} from './../actions/common/common.actions.constants'

const initialState = {
    toggleMenu: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case RESET_STORE: {
            state = initialState
        }

        case Actions.constants.TOGGLE_ACCOUNT_MENU :
            return {
                ...state, ...action.payload
            };

        default:
            return state;
    }
}
