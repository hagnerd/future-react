import React from 'react';
import { Link } from '@reach/router';

import { SecretContext } from '../app';
import { Button, MindWipeGlobalStyles } from '../ui';
import { useHover } from '../utils';

export default function MindWipeButton({ context = SecretContext }) {
  const [hoverRef, isHovered] = useHover();
  const { setSecretAgentStatus } = React.useContext(context);

  return (
    <React.Fragment>
      {isHovered && <MindWipeGlobalStyles />}
      <Button
        as={Link}
        to="/"
        onClick={() => setSecretAgentStatus(false)}
        ref={hoverRef}
      >
        Erase Your Mind
      </Button>
    </React.Fragment>
  );
}
