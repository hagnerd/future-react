import React from 'react';
import styled from 'styled-components';

/* 
  LEARNING GOAL - Understand the basics of React.useRef()

  React.useRef takes 1 argument, the initial value

  React.useRef returns an object that you can use to track a dom node, or any value.

  You can essentially use React.useRef as a way to store instance variables on Function Components.

  React.useRef() is actually more powerful than React.createRef()

*/

const Base = styled.p`
  padding: 10px;
`;

const Hovered = styled.p`
  background-color: #d0886c;
  color: #2e3441;
  ${Base}
`;

function useHover() {
  // TODO: React.useState(false)
  // TODO: React.useRef(null);
  // TODO: handleMouseOver
  // TODO: handleMouseOut
  // TODO: React.useEffect()
  // TODO: Get current ref
  // TODO: effect -> listeners for mouseover and mouseout
  // TODO: cleanup -> remove for mouseover and mouseout
  // TODO: return [ref, value]
}

export default function App() {
  // TODO: useHover

  return (
    <div>
      <div
      // ref={}
      >
        {/* {isHovered ? <Hovered>You're hovering on me</Hovered> : <Base>Aww won't you hover on me?</Base>} */}
      </div>
    </div>
  );
}
