import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import user from "./users.reducer";
import header from "./header.reducer";
import modal from "./modal.reducer";
import forms from "./forms.reducer";

const reducers = combineReducers({
  user,
  header,
  modal,
  forms
});

export const initializeStore = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
