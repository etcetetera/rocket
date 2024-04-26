import { Composable, Modules } from "material-composer-r3f"
import { Vector3 } from "three"
import { Emitter, InstancedParticles, useParticleAttribute, useParticleLifetime } from "vfx-composer-r3f"

export const Sparks = () => {
    const lifetime = useParticleLifetime()
    const velocity = useParticleAttribute(() => new Vector3())
    return (
        <InstancedParticles>
            <planeGeometry args={[0.2, 0.2]} />

            <Composable.meshBasicMaterial>
                <Modules.Velocity direction={velocity} time={lifetime.age} />
                <Modules.Acceleration
                    direction={new Vector3(0, -2, 0)}
                    time={lifetime.age}
                />
                <Modules.Lifetime progress={lifetime.progress} />
            </Composable.meshBasicMaterial>

            <Emitter
                rate={50}
                setup={({ mesh }) => {
                    lifetime.write(mesh, Math.random() * 3 + 1)

                    velocity.write(mesh, (v)
                )
                }}
            />
        </InstancedParticles>
    )
}