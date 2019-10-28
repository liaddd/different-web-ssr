import {
  SET_CONTRACTS_DATA,
  SET_SUMMARY_BUTTONS_COUNT,
  SET_USER_DATA,
  SET_USER_TOKEN
} from "./users.actions.constants";
/*
 * action creators
 */

// user authentication action
export function setAuthenticationToken(global_token) {
  return { type: SET_USER_TOKEN, payload: { global_token } };
}

// user data action
export function setUserData(data) {
  return { type: SET_USER_DATA, payload: { data } };
}

export function setContractsData(data) {
  return { type: SET_CONTRACTS_DATA, payload: data };
}

export function setChangedUsersCount(data) {
  return { type: SET_SUMMARY_BUTTONS_COUNT, payload: data };
}

export default {
  setAuthenticationToken,
  setUserData,
  setContractsData,
  setChangedUsersCount
};
