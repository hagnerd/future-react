import React from 'react';

/* 
  The Goal - Gain a cursory understanding of React.useState();

  React.useState(initialValue || () => initialValue) 

  args:
  * initialValue - can be a primitive, object, or array 
  OR
  * lazy initialization - a function that is run only on mount. It must return the initial state


  return value:
  * React.useState() returns an array where (a tuple) the current state is the first item, and an updater function is the second item


  GOTCHAS
  * The updater function fully replaces the previous state. It does NOT perform a shallow merge.
  * If you need the previous state to calculate the next state, the updater function can optionally take a callback with the current state as the first and only argument, and uses the return value as the next state. ex: updater(prev => prev + 1)

*/

export default function Toggle() {
  // TODO: call React.useState();

  return (
    <div>
      <h3>{/* on ? "ON" : "OFF"*/}</h3>
      <button
      // onClick={() => setToggle(on => !on)}
      >
        Toggle
      </button>
    </div>
  );
}
