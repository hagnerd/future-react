import React from 'react';

export default function useStopwatch() {
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
