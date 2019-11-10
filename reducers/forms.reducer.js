import Actions from "./../actions/forms/";
import { RESET_STORE } from "./../actions/common/common.actions.constants";

const initialState = {
  stepper: {
    activeStep: 1,
    step1: {
      edit: false
    },
    step2: {
      edit: false
    },
    step3: {
      edit: false
    },
    step4: {
      edit: false
    },
    mobileToggleStep3: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_STORE: {
      return initialState;
    }

    case Actions.constants.FORM_STEPPER_STEP1: {
      return {
        ...state,
        stepper: { ...state.stepper, ...action.payload.stepper }
      };
    }

    case Actions.constants.FORM_STEPPER_STEP2: {
      return {
        ...state,
        stepper: { ...state.stepper, ...action.payload.stepper }
      };
    }

    case Actions.constants.FORM_STEPPER_STEP3: {
      return {
        ...state,
        stepper: { ...state.stepper, ...action.payload.stepper }
      };
    }
    case Actions.constants.FORM_STEPPER_STEP4: {
      return {
        ...state,
        stepper: { ...state.stepper, ...action.payload.stepper }
      };
    }
    case Actions.constants.MOBILE_TOGGLE_STEP_3: {
      return {
        ...state,
        stepper: { ...state.stepper, ...action.payload.stepper }
      };
    }

    default:
      return state;
  }
}
