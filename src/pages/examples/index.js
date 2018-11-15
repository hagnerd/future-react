import React from 'react';
import { Link } from '@reach/router';

/* Sub Pages */

const ExampleHome = () => (
  <React.Fragment>
    <h1>Examples</h1>
    <nav>
      <ul>
        <li>
          <h2>Hooks</h2>
          <ul>
            <li>
              <Link to="/examples/use-state">useState</Link>
            </li>
            <li>useReducer</li>
            <li>useContext</li>
            <li>useEffect</li>
            <li>useMemo</li>
            <li>useCallback</li>
          </ul>
        </li>
        <li>
          <h2>Concurrent React</h2>
          <ul>
            <li>Suspense (sync)</li>
            <li>Suspense (async)</li>
          </ul>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);

const ExamplesSubPages = [{ Component: ExampleHome, path: '/' }];

export { ExamplesSubPages };
