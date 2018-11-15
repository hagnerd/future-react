import React from 'react';

export default function useLocalStorage(key, initialValue) {
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
    return setInnerValue(value);
  };

  React.useEffect(
    () => {
      window.localStorage.setItem(key, item);
    },
    [item],
  );

  return [item, setValue];
}
