import React from 'react';

import { useForm } from '../../../utils';
import { TextInput } from '../../../ui';

/*
  Learning Goal - Understand the basics of Use Effect

  React.useEffect takes two arguments:
    argument 1 the effect callback
    argument 2 the dependency array 

  React.useEffect does NOT return a value

  The purpose of useEffect is to perform side effects (fitting name). By default it runs on mount/every re-render.

  It can also optionally run clean-up on unmount/between every render. This sounds like a performance nightmare, but it actually helps prevent things like memory leaks which can sometimes be hard to catch in Class Components.

  To perform cleanup, return a function that performs the cleanup.

  This also has a hidden benefit of collocating all set up and tear down within a single function instead of across three (componentDidMount, componentWillUnmount, and componentDidUpdate).

  Which brings me to the thing I called the dependency array. I don't know what people are calling it in the wild, but by default, if not provided, it is undefined. This causes the useEffect to run on mount/unmount and every re-render/clean-up phase. Most of the time this is probably fine.

  What if you want to limit when it runs though?

  no array = run the set up on every mount/re-render, run the cleanup on every unmount/re-render cleanup phase.

  useEffect(() => { someEffect(); return () => { someCleanup()}}, []) (empty array) = run ONLY on mount/unmount
  useEffect(() => effect, []) = run the effect ONLY on unmount

  If you pass some values into the array (like a prop, a ref, or some state) the effect, and cleanup will only run when those values change

  ...Whew... lets dive in

*/

function useWindowTitle(value = 'Future React') {
  // TODO: React.useEffect
  // document.title
}

export default function App() {
  const { formState, handleChange } = useForm({
    initialValues: {
      windowTitle: 'Future React',
    },
  });

  // TODO: useWindowTitle(formState.windowTitle)

  return (
    <TextInput
      type="text"
      name="windowTitle"
      value={formState.windowTitle}
      onChange={handleChange}
    />
  );
}
