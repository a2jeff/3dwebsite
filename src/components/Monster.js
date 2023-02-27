import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Monster({ position }) {
  const monsterRef = useRef();
  const mixerRef = useRef();

  // Load the monster 3D model using GLTFLoader
  const loader = new GLTFLoader();
  loader.load(
    'path/to/monster/model.gltf',
    gltf => {
      const monster = gltf.scene.children[0];
      monster.scale.set(0.2, 0.2, 0.2);
      monster.position.set(position.x, position.y, position.z);
      monsterRef.current.add(monster);
      mixerRef.current = new THREE.AnimationMixer(monster);
      gltf.animations.forEach(clip => {
        mixerRef.current.clipAction(clip).play();
      });
    },
    undefined,
    error => {
      console.error(error);
    }
  );

  // Update the monster animation on every frame
  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <group ref={monsterRef} />;
}

export default Monster;
