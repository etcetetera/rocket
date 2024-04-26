import { composable, modules } from "material-composer-r3f"
import { between, plusMinus } from "randomish"
import { OneMinus } from "shader-composer"
import { AdditiveBlending, TextureLoader, Vector3 } from "three"
import { Emitter, InstancedParticles, useParticleAttribute, useParticleLifetime } from "vfx-composer-r3f"

export const Smoke = (props) => {
    const lifetime = useParticleLifetime()
    const velocity = useParticleAttribute(() => new Vector3())
    return (
        <InstancedParticles>
            <sphereGeometry args={[0.5, 0.5]} />

            <composable.meshStandardMaterial
                depthWrite={false}
                blending={AdditiveBlending}
                color={"grey"}
            >   
                <modules.Scale scale={OneMinus(lifetime.progress)} />
                <modules.Velocity direction={velocity} time={lifetime.age} />
                <modules.Acceleration
                    direction={new Vector3(0, 0, 0)}
                    time={lifetime.age}
                />
                <modules.Lifetime progress={lifetime.progress} />
            </composable.meshStandardMaterial>

            <Emitter
                // particles spawned per second
                rate={props.rate || 50}
                setup={({ mesh, position }) => {
                    // particles despawn in 1 to lifetimeMax seconds, 1-3 default
                    lifetime.write(mesh, between(1, props.lifetimeMax || 3))

                    // initial velocity
                    velocity.write(mesh, (v) =>
                        v.set(
                            plusMinus(0.2), 
                            between(-1, -6), 
                            plusMinus(0.2)
                        )
                    )
                }}
            />
        </InstancedParticles>
    )
}

export default Smoke