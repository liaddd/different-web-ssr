import Actions from "./../actions/users/";
import {
  RESET_STORE,
  SET_USER_TOKEN
} from "./../actions/common/common.actions.constants";

const initialState = {
  contracts: [],
  auth: false,
  phone: null,
  successMessage: null,
  new_user: false,
  showModal: false,
  first_name: null,
  last_name: null,
  birth_date: "1970-01-01",
  id_number: null,
  email: null,
  about: null,
  profession: null,
  city: null,
  address: null,
  street: null,
  street_no: null,
  apt_no: null,
  no_of_kids: null,
  profile_image: null,
  created_at: void 0,
  updated_at: void 0,
  image_id: null,
  image_delete_token: null,
  flow_type: null,
  landlord_user_id: null,
  checked_users: [
    {
      first_name: null,
      last_name: null,
      id_number: null,
      phone: null,
      property_id: null,
      first_nameValidate: {
        error: void 0
      },

      last_nameValidate: {
        error: void 0
      },

      id_numberValidate: {
        error: void 0
      },

      phoneValidate: {
        error: void 0
      }
    }
  ],
  creditCard: {
    token: void 0
  },
  selected_tenant_user: null,
  buttonsCount: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.constants.SET_USER_TOKEN: {
      return {
        ...state,
        auth: { global_token: action.payload.global_token }
      };
    }
    case RESET_STORE: {
      return initialState;
    }
    case Actions.constants.SET_AUTHENTICATION:
      return {
        ...state,
        ...action.payload
      };

    case Actions.constants.SET_USER_DATA:
      return {
        ...state,
        ...action.payload.data
      };
    case Actions.constants.SET_CONTRACTS_DATA:
      return {
        ...state,
        contracts: [...action.payload]
      };
    case Actions.constants.SET_SUMMARY_BUTTONS_COUNT:
      let checked_users = state.checked_users;
      const buttonsCount = action.payload.buttonsCount;

      if (checked_users.length >= buttonsCount) {
        checked_users.length = buttonsCount;
      } else if (checked_users.length < buttonsCount) {
        for (let i = buttonsCount; i >= 0; i--) {
          if (checked_users.length < buttonsCount) {
            checked_users.push({
              first_name: null,
              last_name: null,
              id_number: null,
              phone: null,
              property_id: null,
              first_nameValidate: {
                error: void 0
              },

              last_nameValidate: {
                error: void 0
              },

              id_numberValidate: {
                error: void 0
              },

              phoneValidate: {
                error: void 0
              }
            });
          }
        }
      }

      state.checked_users = checked_users;

      return {
        ...state
      };

    default:
      return state;
  }
}
