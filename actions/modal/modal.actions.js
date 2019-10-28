import { SHOW_CLOSE_MODAL } from "./modal.actions.constants";
/*
 * action creators
 */
// show close modal action
export function showCloseModal(showModal) {
  return { type: SHOW_CLOSE_MODAL, payload: { showModal } };
}

export default {
  showCloseModal
};
