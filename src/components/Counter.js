import React from "react"
import { connect } from "react-redux"

import { inc, dec, reset } from "../redux/actions"

const Counter = ({ value = 0, inc, dec, reset }) => {
  return (
    <div className="Counter">
      <div>
        <h2>{value}</h2>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.counter,
  }
}

const mapDispatchToProps = { inc, dec, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
