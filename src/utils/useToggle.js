import React from 'react';

export default function useToggle({
  initialValue = false,
  deactivated = false,
} = {}) {
  const [on, setToggle] = React.useState(initialValue);

  function toggle() {
    if (!deactivated) {
      return setToggle(on => !on);
    }
  }

  function toggleOverride() {
    return setToggle(on => !on);
  }

  function manualToggle(value) {
    return setToggle(value);
  }

  function reset() {
    return setToggle(initialValue);
  }

  return {
    on,
    toggle,
    toggleOverride,
    manualToggle,
    reset,
  };
}
