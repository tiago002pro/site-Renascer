import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';

const AppWrapper = styled.div`
  background: var(--grayDark);  
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
    </AppWrapper>
  );
}

export default App;
