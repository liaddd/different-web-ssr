import Actions from './../actions/modal/'
import {RESET_STORE} from './../actions/common/common.actions.constants'

const initialState = {
    showModal: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RESET_STORE: {
            return  initialState
        }
        case Actions.constants.SHOW_CLOSE_MODAL :
            return {
                ...state, ...action.payload
            };

        default:
            return state;
    }
}