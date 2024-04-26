import { Canvas } from '@react-three/fiber'
import { OrbitControls, Plane, StatsGl } from '@react-three/drei'
import GameCamera from './components/utils/GameCamera'
import Background from './components/utils/Background'
import './styles/App.css'
import { MovingRocket } from './components/MovingRocket'
import { IdleRocket } from './components/IdleRocket'

const App = () => {
  return (
    <div className='app-container'>
      <Canvas dpr={window.devicePixelRatio}>
        <OrbitControls />
        <GameCamera />
        <StatsGl />

        <Background />

        <Plane rotation={[-Math.PI / 2, 0, 0]} scale={2}>
          <meshStandardMaterial color={"grey"}/>
        </Plane>


        <IdleRocket />
        <MovingRocket />

      </Canvas>
    </div>
  )
}

export default App
