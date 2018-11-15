import React from 'react';

export function useToggle({ initialValue = false, deactivated = false }) {
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

export function useForm({
  initialValues = {},
  onSubmit,
  resetOnSubmit = true,
  preventDefault = true,
}) {
  const [formState, setFormState] = React.useState(initialValues);

  function handleSubmit(event) {
    if (preventDefault) {
      event.preventDefault();
    }

    onSubmit(formState);

    if (resetOnSubmit) {
      setFormState(initialValues);
    }
  }

  function handleChange(event) {
    return setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return { formState, handleSubmit, handleChange };
}

export function useCounter({
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

export function useLocalStorage(key, initialValue) {
  const [item, setInnerValue] = React.useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
}

export function useStopWatch() {
  const [isRunning, setRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const timer = React.useRef(null);

  React.useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime(time => time + 1);
      });
    }
    return () => {
      clearInterval(timer.current);
    };
  });

  return {
    time,
    isRunning,
    setRunning,
  };
}

export function useHover() {
  const [value, setValue] = React.useState(false);

  const ref = React.useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  React.useEffect(
    () => {
      const node = ref.current;

      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current],
  );

  return [ref, value];
}
