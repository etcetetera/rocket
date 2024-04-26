import { Outlines } from "@react-three/drei";
import { useState } from "react";
import { create } from "zustand";

export function ClickableBox() {

    // const useBoxStore = create((set) => ({
    //     boxColor: "red",
    //     toggleColor: () => {
    //         console.log("toggleColor")
    //         set((state) => ({ boxColor: state.boxColor == "red" ? "blue" : "red" }))
    //     }
    // }))

    // const boxColor = useBoxStore((state) => state.boxColor)
    // const toggleColor = useBoxStore((state) => state.toggleColor)

    const [boxVisible, setBoxVisible] = useState(true)

    return (
        <mesh onClick={() => setBoxVisible(!boxVisible)}>
            <boxGeometry />
            <Outlines color={"red"} thickness={0.1} visible={boxVisible} />
        </mesh>
    )
}