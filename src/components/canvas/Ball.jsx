// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//    <>
//      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//    </>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

import React from "react";

const Ball = ({ imgUrl }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="flex justify-center items-center rounded-full relative md:w-[100px]  md:h-[100px] w-[80px] h-[80px] bg-[#000000] overflow-hidden  border border-gray-300 shadow-lg">
          <img
            src={imgUrl}
            alt="Ball Decal"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <>
      <div
        className="flex justify-center items-center mg:w-[200px] md:h-[200px] w-[180px] h-[180px] rounded-full shadow-md"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #010914 0, #cfe8fd, #002460 100%)",
        }}
      >
        <Ball imgUrl={icon} />
      </div>
    </>
  );
};

export default BallCanvas;
