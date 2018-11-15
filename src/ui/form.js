import styled from 'styled-components';
import { rhythm } from './typography';

export const TextInput = styled.input`
  background-color: #d8deea;
  border: 2px solid #4c566c;
  color: #2e3441;
  padding: 10px 10px;
  border-radius: 25px;
  margin-bottom: ${rhythm(1.5)};

  &[value] {
    text-align: center;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  text-align: center;
  color: #8fbcbb;
  font-weight: bold;
`;

export const FormButton = styled.button`
  padding: 10px 10px;
  background-color: #a4be86;
  border: 2px solid #5e80b0;
  border-radius: 25px;
  min-width: 100px;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #5e80b0;
    border: 2px solid #a4be86;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${rhythm(1)} auto;
  max-width: 400px;
`;
