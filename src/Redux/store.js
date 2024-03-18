import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import { thunk } from "redux-thunk"; // Import thunk correctly

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;