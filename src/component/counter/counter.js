import React from "react";
import { connect } from "react-redux";
import { increase } from "../../redux/counter/counterAction";

const counter = (props) => {
  return (
    <div>
      <div>counter {props.counter}</div>
      <button onClick={props.increase}>increase</button>
    </div>
  );
};
const mapStatToProps = (state) => {
  return {
    counter: state.counter1.counter,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increase());
    },
  };
};

export default connect(mapStatToProps, mapDispathToProps)(counter);
