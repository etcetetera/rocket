import { Rocket } from "../models/Rocket"
import Sparks from "./Sparks"

export const IdleRocket = (props) => {
    return (
        <group {...props}>
            <Rocket />
            <Sparks speed={3} rate={100}/>
        </group>
    )
}