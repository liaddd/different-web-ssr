import { RESET_STORE } from "./common.actions.constants";
import { removeCookie } from "../../utils/cookie";
/*
 * action creators
 */
// user authentication action
export function logout() {
  removeCookie("global_token");
  return { type: RESET_STORE };
}

export default {
  logout
};
