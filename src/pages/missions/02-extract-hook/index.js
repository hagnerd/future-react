import React from 'react';
import Layout from '../../../templates/mission-detail';

import Mission from './mission-02';

export default () => (
  <Layout>
    <h1>Mission 02</h1>
    <h2>Extracting Hooks</h2>

    <h4>The Components:</h4>
    <Mission />
    {/* place codesandbox link here */}
    <a href="https://codesandbox.io/s/github/hagnerd/future-react/tree/master/?initialpath=%2Fmissions%2F02-extract-hook&module=%2Fsrc%2Fpages%2Fmissions%2F02-extract-hook%2Fmission-02.js&view=editor">
      <img
        alt="Edit future-react"
        src="https://codesandbox.io/static/img/play-codesandbox.svg"
      />
    </a>
  </Layout>
);
