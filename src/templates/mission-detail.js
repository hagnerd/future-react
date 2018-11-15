import React from 'react';
import { Link } from '@reach/router';

export default ({ children }) => (
  <React.Fragment>
    <Link to="/missions">
      <span role="img" aria-label="back arrow">
        👈🏼
      </span>{' '}
      Back to Missions Page
    </Link>
    {children}
  </React.Fragment>
);
