import React from 'react';

export default function useForm({
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
