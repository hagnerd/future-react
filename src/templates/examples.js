import React from 'react';
import { Link } from '@reach/router';

export default ({ children }) => (
  <React.Fragment>
    <Link to="/examples">{'<-'} Back to Examples</Link>
    {children}
  </React.Fragment>
);
