import { Rocket } from "../models/Rocket"
import Sparks from "./Sparks"
import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Smoke } from "./Smoke"

export const MovingRocket = (props) => {
    const speed = 4

    const rocketRef = useRef()

    useEffect(() => {
        rocketRef.current.position.x = 8
    })

    useFrame((state, delta) => {
        rocketRef.current.position.y += delta * speed
        if (rocketRef.current.position.y > 8) {
            rocketRef.current.position.y = -8
        }
    })

    return (
        <group {...props} ref={rocketRef}>
            <Rocket />
            <Sparks rate={150} lifetimeMax={6}/>
            <Smoke />
        </group>
    )
}
