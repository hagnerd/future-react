import React from 'react';
import { Link } from '@reach/router';

import Layout from '../templates/default';
import { FlexSection, Button } from '../ui';

export default () => (
  <Layout>
    <h1>Orientation</h1>

    <p>
      So you figured out the extremely challenging Super Secret Agent Test?
      Congratulations trainee.
    </p>

    <p>
      Here at F.U.T.R. we are looking for the best, the brightest, the most
      adventurous. Does that sound like you? Good!
    </p>

    <p>
      This will not be a walk in the park. We will be requiring you to travel
      into the Future to learn and use these new Features. It's unstable, it's
      buggy, but by golly is it glorious.
    </p>

    <p>
      If at any point you feel overwhelmed, locate the nearest Mind Wiping
      station. You can always come back, if you pass our test again.
    </p>

    <p>
      Introduce yourself to your fellow trainees, and remember, don't hesitate
      to ask any questions.
    </p>

    <p>When you're ready click the 'Get Started' button below</p>

    <FlexSection>
      <Button as={Link} to="/missions">
        Get Started
      </Button>
    </FlexSection>
  </Layout>
);
