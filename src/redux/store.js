import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import mainReducer from "./reducer";

const storeEnhancers = compose(applyMiddleware(thunk));

const initialState = {
  state: {
    getPost: [],
    createPost: {},
    updatePost: {}
  }
};

const store = createStore(mainReducer, initialState, storeEnhancers);

export default store;
