import { Canvas } from '@react-three/fiber'
import { Billboard, Plane, StatsGl } from '@react-three/drei'
import GameCamera from './components/utils/GameCamera'
import CameraControls from './components/utils/CameraControls'
import Background from './components/utils/Background'
import './styles/App.css'
import { Hurdle, TallHurdle } from './models/Hurdle'
import { Barrier } from './models/Barrier'
import { Wall } from './models/Wall'
import { EffectComposer, Bloom, Pixelation } from "@react-three/postprocessing";
import { Road } from './models/Road'
import { TunnelAd } from './models/Space-ad'
import { Canister } from './models/Canister'
import { Runner } from './models/Runner'
import { Ring } from './models/Ring'
import { Coupling } from './models/Coupling'
import { Tunnel } from './models/Tunnel'
import { useEffect, useRef } from 'react'
import { ClickableBox } from './components/utils/ClickableBox'

const App = () => {
  return (
    <div className='app-container'>
      <Canvas dpr={window.devicePixelRatio}>
        <group position ={[10, 100, 0]} rotation={[0, 0, 0]}>
          <Hurdle />
          <TallHurdle position={[4, 0, 0]} />
          <Barrier position={[0, 0, 4]} />
          <Wall position={[4, 0, 4]} rotation={[0, Math.PI, 0]}/>
        </group>

        <group>
          {/* <Runner color={"#8ff8e2"} outlineVisible={false} /> */}
          <Road />
          <TunnelAd position={[-20, 0, 0]} />
          <Canister position={[1, 0.4, 6]} color={"#8ff8e2"} url="/png/icon-tire.png" imageScale={1.25} />
          <Canister position={[0, 0.4, 5]} color={"#a884f3"} url="/png/icon-balloon.png"/>
          <Canister position={[-1, 0.4, 7]} color={"#fbff86"} url="/png/icon-hammer.png" imageScale={1.2} />

          <Ring />
          <Coupling />
          <Tunnel />
        </group>

        {/* <ClickableBox /> */}

        <GameCamera />
        <CameraControls />
        <Background />
        <StatsGl />

        <EffectComposer>
          {/* <Bloom 
            luminanceThreshold={0.5}
          /> */}
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App
