import styled, { createGlobalStyle } from 'styled-components';

import { rhythm } from './typography';

const FlexSection = styled.section`
  margin: ${rhythm(2)} 0;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #5e80b0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #2e3441;
  padding: 10px 15px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #2e3441;
    color: #5e80b0;
  }
`;

const MindWipeGlobalStyles = createGlobalStyle`
  *, body, html {
    background-color: #BF6269;
  }
`;

export { Button, FlexSection, MindWipeGlobalStyles, rhythm };
