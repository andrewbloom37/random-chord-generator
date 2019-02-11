import React, { FunctionComponent, useState } from 'react';

import { ExpandableButton } from './styled/styled-buttons';
import { StyledExpandable } from './styled/styled-expandable';

interface State {
  collapsed: boolean,
};

const initialState: State = {
  collapsed: true,
};

const Expandable: FunctionComponent<{children?: any, state?: State}> = ({children, state = initialState}) => {
  const [collapsed, setCollapsed] = useState(state.collapsed);

  return (
    <>
      <ExpandableButton
        onClick={() => setCollapsed(!collapsed)} 
      >
        advanced: {collapsed ? 'expand' : 'collapse'}
      </ExpandableButton>
      <StyledExpandable collapsed={collapsed}>
        {children}
      </StyledExpandable>
    </>
  )
}

export default Expandable;
