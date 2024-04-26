import { composable, modules } from "material-composer-r3f"
import { between, plusMinus } from "randomish"
import { OneMinus } from "shader-composer"
import { AdditiveBlending, TextureLoader, Vector3 } from "three"
import { Emitter, InstancedParticles, useParticleAttribute, useParticleLifetime } from "vfx-composer-r3f"

export const Sparks = (props) => {
    const size = props.size || 0.2

    const lifetime = useParticleLifetime()
    const velocity = useParticleAttribute(() => new Vector3())
    return (
        <InstancedParticles>
            <planeGeometry args={[size, size]} />

            <composable.meshStandardMaterial
                depthWrite={false}
                blending={AdditiveBlending}
                color={"orange"}
            >
                <modules.Billboard />
                <modules.Scale scale={OneMinus(lifetime.progress)} />
                <modules.Velocity direction={velocity} time={lifetime.age} />
                <modules.Acceleration
                    direction={new Vector3(0, -2, 0)}
                    time={lifetime.age}
                />
                <modules.Lifetime progress={lifetime.progress} />
            </composable.meshStandardMaterial>

            <Emitter
                rate={props.rate || 50}
                setup={({ mesh }) => {
                    lifetime.write(mesh, between(1, props.lifetimeMax || 3))

                    velocity.write(mesh, (v) =>
                        v.set(
                            plusMinus(props.speed || 1), 
                            between(0, props.speed || 1), 
                            plusMinus(props.speed || 1)
                        )
                    )
                }}
            />
        </InstancedParticles>
    )
}

export default Sparks