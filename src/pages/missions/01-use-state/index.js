import React from 'react';
import styled from 'styled-components';

import Layout from '../../../templates/mission-detail';
import { useForm } from '../../../utils';
import { TextInput, rhythm } from '../../../ui';

import { Toggle, Counter, Form } from './mission-01';

const Container = styled.div`
  margin: ${rhythm(2)} auto;
  max-width: 700px;
  display: flex;
  justify-content: center;
`;

export default () => {
  const { formState, handleChange } = useForm({
    initialValues: {
      firstName: 'Enter your first name',
    },
  });

  return (
    <Layout>
      <h1>Mission 01</h1>
      <h2>Use State</h2>

      <p>
        Today is your first day at the office. You notice a gaggle of nervous
        looking trainees standing near the Craft Beer Tap and Artisinal Coffee
        Dispenser. You walk over and introduce yourself.
      </p>

      <p>
        "Hi", you say. "My name is{' '}
        <TextInput
          type="text"
          value={formState.firstName}
          name="firstName"
          onChange={handleChange}
        />
        "
      </p>

      <p>Right at that moment, your new boss, Sophie, walks into the room.</p>

      <p>
        "Today we're going over the basics! I hope you're all filled with
        Suspense, because I'm about to Hook you with how cool the future is."
      </p>

      <p>
        You could hear the sound of a pin dropping. No one gets the joke. Like
        even a little. Even if if they did, it wasn't that good of a joke.
      </p>

      <p>
        "Right, no one knows yet...", Sophie says with a look of defeat. "In the
        Future you don't need a Class Component to store state, or handle
        life-cycle changes."
      </p>

      <p>
        "But how does React store state in a Function Component?", one trainees
        asks in dismay.
      </p>

      <p>
        "The same way it does in Class Components", says a slender male figure
        with glasses. He's been leaning up against the wall and nobody noticed.
        "You see React handles all state internally, we just used the same
        underlying functions to tie state to Function Components."
      </p>

      <p>
        "That's Dan," Sophie announces. "Anyways, today we're going to start
        with a simple Toggle component to show you how to <em>use state</em>."
      </p>

      <p>Crickets again...</p>

      <hr />

      <h4>The Components:</h4>

      <Container>
        <Toggle />
      </Container>
      <Container>
        <Counter />
      </Container>
      <Container>
        <Form />
      </Container>

      <h4>The Mission:</h4>
      <a href="https://codesandbox.io/s/github/hagnerd/future-react/tree/master/?initialpath=%2Fmissions%2F01-use-state&module=%2Fsrc%2Fpages%2Fmissions%2F01-use-state%2Fmission-01.js&view=editor">
        <img
          alt="Edit future-react"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </Layout>
  );
};
