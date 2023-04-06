import { combineReducers } from "redux";
import reducer from "./counter/ReducerAction";
import reducer2 from "./counter2/counterReducer2";

const rootreducer = combineReducers({
  counter1: reducer,
  counter2: reducer2,
});
export default rootreducer;
