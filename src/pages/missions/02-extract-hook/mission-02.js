import React from 'react';

/* 
  The Goal - Learn About Custom Hooks 

  Extracting shared, flexible logic is where the Hooks API truly shines.

  To make a custom hook, just define a function that starts with use (this is a convention).

  To use a custom hook in a Function component, just call it like you would call one of the built in Hooks!

  Custom hooks can be made of any/all Hooks, as well as other custom hooks.

  You can make multiple calls to the same hook, or different hooks in Custom Hooks, and Function Components.

  Gotchas:
  * Hooks cannot be called conditionally.

  That seems like a much bigger deal than it really is. I have yet to run into a situation where that was a hard limitation.

*/

/*
  useToggle()
  takes an object { initialValue = false, deactivated = false, allowResetWhenDeactivated = true } = {}
  returns and object { on, toggle, toggleOverride, manualToggle, reset }
*/

/* 
  useCounter()
  takes an object { initialValue = 0, changeBy = 1, floor = undefined, ceiling = undefined } = {}
  returns an object { count, changeBy, increment, decrement, reset }
*/

/* 
  useForm()
  takes an object { initialValues = {}, onSubmit, resetOnSubmit = true, preventDefaul = true } = {}  
  returns an object { formState, handleChange, handleSubmit, clearForm }
*/

export function ToggleOne({ initialValue = false, deactivated = false } = {}) {
  // TODO: Extract the logic from Toggle() into useToggle
  const [on, setToggle] = React.useState(initialValue);

  function toggle() {
    if (!deactivated) {
      return setToggle(on => !on);
    }
  }

  return (
    <div>
      <button onClick={toggle}>Toggle {on ? 'OFF' : 'ON'}</button>
    </div>
  );
}

export function ToggleTwo({ initialValue, deactivated = false }) {
  const [on, setToggle] = React.useState(initialValue);

  function toggle() {
    if (!deactivated) {
      return setToggle(on => !on);
    }
  }

  function toggleOverride() {
    return setToggle(on => !on);
  }

  return (
    <div>
      <h3>{on ? 'ON' : 'OFF'}</h3>
      <button onClick={toggle}>Toggle</button>
      <button onClick={toggleOverride}>OVERRIDE</button>
    </div>
  );
}

/*
  TODO: Make a Convoluted Component
  It should have use a counter that is the changeBy for another counter component

  There should be a toggle that reveals a number input (form) for the floor
  There should be another toggle that reveals a number input (form) for the ceiling

  Then the second counter should be able to increment, and decrement using all of this info
*/
export default function App() {
  return (
    <div>
      <ToggleOne initialValue={true} />
      <ToggleTwo deactivated={true} />
    </div>
  );
}
