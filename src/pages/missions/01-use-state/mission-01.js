import React from 'react';

import { Button, Label, Form as UiForm, TextInput } from '../../../ui/';

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

export function Toggle() {
  // TODO: call React.useState();

  return (
    <div>
      <h3>{/* on ? "ON" : "OFF"*/}</h3>
      <Button
      // onClick={() => setToggle(on => !on)}
      >
        Toggle
      </Button>
    </div>
  );
}

export function Counter() {
  // TODO: call React.useState();

  return (
    <div>
      <h3>{/* count */}</h3>
      <Button
      // onClick={() => setCount(count => count + 1)}
      >
        +1
      </Button>
      <Button
      // onClick={() => setCount(count => count - 1)}
      >
        -1
      </Button>
    </div>
  );
}

export function Form() {
  // TODO: call React.useState()

  return (
    <UiForm
    // onSubmit={handleSubmit}
    >
      <Label htmlFor="firstName">First Name</Label>
      <TextInput
        type="text"
        id="firstName"
        name="firstName"
        // value={firstName}
        // onChange={handleFirstNameChange}
      />
      <Label htmlFor="lastName">Last Name</Label>
      <TextInput
        type="text"
        id="lastName"
        name="lastName"
        // value={lastName}
        // onChange={handleLastNameChange}
      />
      <Button type="submit">Button</Button>
    </UiForm>
  );
}
