import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease } from "../../redux/counter/counterAction";

const CounterHook = () => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        decrease
      </button>
    </div>
  );
};
export default CounterHook;
