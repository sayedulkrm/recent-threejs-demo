import React, { Suspense, useRef } from 'react';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'

import './PartOne.css';
import { RoomOne } from '../assets/Room1';
import { Room2 } from '../assets/Room2';
import { Room3 } from '../assets/Room3';
import { Room4 } from '../assets/Room4';
import { Room5 } from '../assets/Room5';
import { Room6 } from '../assets/Room6';
import { Room7 } from '../assets/Room7';
import { Room8 } from '../assets/Room8';





const PartOne = () => {
    return (
        <div className='wrapper' >
            <Canvas camera={{ fov:70, position: [0,0,25] }} >
                <Suspense fallback={null} >
                    <ambientLight />
                    <directionalLight intensity={2} position={[-50,0,-30]} />
                    <RoomOne />
                    <Room2 />
                    <Room3 />
                    <directionalLight intensity={2} position={[50,0,0]} />
                    <Room4 />
                    <Room5 />
                    <Room6 />
                    <Room7 />
                    <Room8 />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    

                </Suspense>
            </Canvas>

        </div>
    )
}

export default PartOne