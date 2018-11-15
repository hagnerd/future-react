import React from 'react';
import Layout from '../../../templates/mission-detail';

import Mission from './mission-05';

export default () => (
  <Layout>
    <h1>Mission 05</h1>
    <h2>Use Effect</h2>

    <h4>The Components:</h4>
    <Mission />
    {/* place codesandbox link here */}
    <a href="https://codesandbox.io/s/github/hagnerd/future-react/tree/master/?initialpath=%2Fmissions%2F05-use-effect&module=%2Fsrc%2Fpages%2Fmissions%2F05-use-effect%2Fmission-05.js&view=editor">
      <img
        alt="Edit future-react"
        src="https://codesandbox.io/static/img/play-codesandbox.svg"
      />
    </a>
  </Layout>
);
