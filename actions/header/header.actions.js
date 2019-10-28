import {TOGGLE_ACCOUNT_MENU} from './header.actions.constants'
/*
 * action creators
 */
// user authentication action
export function accountMenuToggle(toggleMenu) {
    return {type: TOGGLE_ACCOUNT_MENU, payload: {toggleMenu}}
}

export default {
    accountMenuToggle
}
