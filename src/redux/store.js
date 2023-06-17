import { createStore } from "redux";
import { dataReducer, pageReducer  } from "./reducers/reduxReducers";
import { combineReducers } from "redux";

const result = combineReducers({
    dataR : dataReducer,
    pageR : pageReducer,
})
export const store = createStore(result)