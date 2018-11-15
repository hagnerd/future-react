import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { rhythm } from '../ui/typography';

const ButtonLink = styled(Link)`
  background-color: #5e80b0;
  color: #2e3441;
  transition: all 300ms ease-in-out;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 2px;

  &:hover {
    background-color: #2e3441;
    color: #5e80b0;
  }
`;

const FlexSection = styled.section`
  margin: ${rhythm(2)} 0;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 63px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
`;

export default () => {
  return (
    <Container>
      <Title>F.U.T.R.</Title>
      <p>
        The top secret bureau. There's nothing to see here. Unless you want to
        learn about Hooks, and Concurrent React.
      </p>

      <FlexSection>
        <ButtonLink to="/missions">Secret Missions</ButtonLink>
        <ButtonLink to="/examples">Explore Examples</ButtonLink>
      </FlexSection>
    </Container>
  );
};
