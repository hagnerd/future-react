import React from 'react';
import { Link } from '@reach/router';

export default ({ children }) => (
  <>
    <Link to="/examples">{'<-'} Back to Examples</Link>
    {children}
  </>
);
