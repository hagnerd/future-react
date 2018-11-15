import React from 'react';

export default function useCounter({
  initialValue = 0,
  changeBy = 1,
  floor = undefined,
  ceiling = undefined,
}) {
  const [count, setCount] = React.useState(initialValue);

  function increment() {
    if (
      (ceiling !== undefined && count + changeBy < ceiling) ||
      ceiling === undefined
    ) {
      return setCount(count => count + changeBy);
    }
  }

  function decrement() {
    if (
      (floor !== undefined && count - changeBy > floor) ||
      floor === undefined
    ) {
      return setCount(count => count - changeBy);
    }
  }

  return { count, changeBy, increment, decrement };
}
