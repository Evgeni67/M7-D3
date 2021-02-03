import { createStore } from "redux";
import rootReducer from "../reducers";

export const initialState = {
  favouriteJobs: [],
};

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
