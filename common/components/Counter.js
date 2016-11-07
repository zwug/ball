import React, { Component, PropTypes } from 'react'

const Counter = ({getHundred, increment, incrementIfOdd, incrementAsync, decrement, counter}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
    {' '}
    <button onClick={incrementIfOdd}>Increment if odd</button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
    {' '}
    <button onClick={() => getHundred()}>get a 100!</button>
  </p>
)

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  getHundred: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
