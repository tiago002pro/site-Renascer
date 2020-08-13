import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import CarouselImage from './components/Carousel/components/ImageCard';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background-color: var(--grayDark);

  padding-top: 94px;
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <CarouselImage />


      <Footer />
    </AppWrapper>
  );
}

export default App;
