import React from 'react';
import { Stars } from 'drei';
import styled from 'styled-components';

const SkyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function Sky() {
  return (
    <SkyWrapper>
      <Stars />
    </SkyWrapper>
  );
}

export default Sky;
