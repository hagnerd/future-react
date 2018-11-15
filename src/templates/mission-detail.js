import React from 'react';
import { Link } from '@reach/router';

import Default from './default';

export default ({ children }) => (
  <Default>
    <Link to="/missions">
      <span role="img" aria-label="back arrow">
        👈🏼
      </span>{' '}
      Back to Missions Page
    </Link>
    {children}
  </Default>
);
