import React from "react";
import { connect } from "react-redux";

import { inc, dec } from "../redux/actions";

const Counter = ({ value = 0, inc, dec }) => {
  return (
    <div className="Counter">
      <div>
        <h2>{value}</h2>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = { inc, dec };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
