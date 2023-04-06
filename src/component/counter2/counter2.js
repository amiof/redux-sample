import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../redux/counter2/counterAction2";

const Counter2 = () => {
  const state = useSelector((state) => state.counter2.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>counter - {state}</p>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        increase
      </button>
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

export default Counter2;
