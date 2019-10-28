import {FORM_STEPPER_STEP1, MOBILE_TOGGLE_STEP_3} from './forms.actions.constants'
/*
 * action creators
 */
// stepper action
export function stepper(stepper) {
  return {type: FORM_STEPPER_STEP1, payload: {stepper}}
}
// MOBILE_TOGGLE_STEP_3 action
export function stepper_toggle(stepper) {
    return {type: MOBILE_TOGGLE_STEP_3, payload: {stepper}}
}

export default {
    stepper,
    stepper_toggle
}
