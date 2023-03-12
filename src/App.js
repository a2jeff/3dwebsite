import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stats } from 'drei';
import styled from 'styled-components';

import Sky from './components/Sky';
import TextCard from './components/TextCard';
import Monster from './components/Monster';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const TextCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  const [textCardVisible, setTextCardVisible] = useState(true);

  const handleTextCardClick = () => {
    setTextCardVisible(false);
  };

  const monsters = [
    {
      id: 1,
      position: [10, 0, -10],
      rotation: [0, Math.PI / 2, 0],
      scale: [0.5, 0.5, 0.5],
      color: 'red',
    },
    {
      id: 2,
      position: [-10, 0, -10],
      rotation: [0, -Math.PI / 2, 0],
      scale: [0.5, 0.5, 0.5],
      color: 'blue',
    },
    {
      id: 3,
      position: [10, 0, 10],
      rotation: [0, Math.PI / 2, 0],
      scale: [0.5, 0.5, 0.5],
      color: 'green',
    },
    {
      id: 4,
      position: [-10, 0, 10],
      rotation: [0, -Math.PI / 2, 0],
      scale: [0.5, 0.5, 0.5],
      color: 'yellow',
    },
  ];

  return (
    <Wrapper>
      <Canvas>
        <Sky />
        {monsters.map(monster => (
          <Monster key={monster.id} {...monster} />
        ))}
        <OrbitControls />
        <Stats />
      </Canvas>
      <TextCardContainer>
        <TextCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          visible={textCardVisible}
          onClick={handleTextCardClick}
        />
      </TextCardContainer>
    </Wrapper>
  );
}

export default App;
