import { combineReducers } from "redux";
import { CountReducer } from "./CountReducer";

export const rootReducer = combineReducers({
  CountReducer: CountReducer,
});
