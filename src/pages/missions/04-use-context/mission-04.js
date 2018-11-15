import React from 'react';
import styled from 'styled-components';

import { useForm } from '../../../utils';

/*
  GOAL - Learn about React.useContext

  React.useContext takes a single argument, which is the Context object (returned from React.CreateContext)

  React.useContext returns the context consumer object, of the nearest Provider, OR the default value of the Context object if it is rendered outside of a provider

*/

const ThemeContext = React.createContext({ backgroundColor: 'orange' });

const Div = styled.div`
  width: 400px;
  height: 400px;
`;

const CoolBackground = styled.div`
  background-color: ${props => props.backgroundColor};
  ${Div};
`;

function BoringContent() {
  return <Div>Borrring</Div>;
}

function ExcitingContent() {
  // TODO: useContext

  return (
    <CoolBackground
    // backgroundColor={}
    >
      Super exciting!!!
    </CoolBackground>
  );
}

export default function App() {
  const [currentColor, setCurrentColor] = React.useState('green');

  const { formState, handleChange, handleSubmit } = useForm({
    initialValues: {
      color: 'green',
    },
    onSubmit: () => setCurrentColor(formState.color),
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={formState.backgroundColor}
          onChange={handleChange}
        />
        <button type="submit">Change Color</button>
      </form>

      {/* Exciting Content */}
      <ThemeContext.Provider value={{ backgroundColor: currentColor }}>
        <ExcitingContent />
        <BoringContent />
      </ThemeContext.Provider>
    </div>
  );
}
