




// ******************
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { Suspense, useEffect, useState } from "react"
import { OrbitControls, useTexture } from "@react-three/drei"
import { useRef } from "react"
import { TextureLoader } from "three"


function Box1({ position, color, texturesImg, rotation }) {
    const colorMap = useLoader(TextureLoader, `/${texturesImg}`)
    const box1Ref = useRef()




    useFrame(() => {

        box1Ref.current.rotation.y += 0.01
        box1Ref.current.rotation.x += 0.0001

    })
    return (
        <>
            <group castShadow ref={box1Ref} rotation={rotation} position={position} scale={0.3}>
                <mesh castShadow position={[0, 0, 1]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshStandardMaterial map={colorMap} />
                </mesh>
            </group>
        </>
    )
}

const Cone = () => {


    const mainMeshRef = useRef()
    const groupRef = useRef()

    const props = useTexture({
        map: '/linux.png',
        displacementMap: '/node.jpg',
        normalMap: '/py.jpg',
        roughnessMap: '/c.png',
        aoMap: '/java.png',
    })

    useFrame(() => {
        mainMeshRef.current.rotation.y += 0.014
        mainMeshRef.current.rotation.x += 0.0033

        groupRef.current.rotation.y += 0.001
        groupRef.current.rotation.x += 0.0001



    })


    return (
        <>
            <group ref={groupRef}>

                <mesh ref={mainMeshRef} position={[0, 1, 1]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial displacementScale={0.024} {...props} />
                </mesh>
            </group>
        </>
    )

}


const BoxContainers = () => {
    const boxGroupRef = useRef()
    useFrame(() => {
        boxGroupRef.current.rotation.y += 0.014
        boxGroupRef.current.rotation.x += 0.0033


    })




    return (
        <>
            <group rotation={[0, -0.01, 0]} position={[0, 0, 1]} ref={boxGroupRef}>
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[2.3, 0, -3.3]} position={[4, 1.9, 1]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.1, 0.12, 0.42]} position={[3.9, 3.2, 2.2]} color="green" args={[1.5, 1.5, 1.5]} texturesImg={"reacts.jpg"} />
                <Box1 rotation={[0.01, 0.4, 0.1]} position={[2.4, 4, 2.5]} color="purple" texturesImg={"material_ui.png"} />
                <Box1 rotation={[1.8, 0.89, -0.5]} position={[1, 4, 2.5]} color="hotpink" texturesImg={"passport.png"} />
                <Box1 rotation={[0.1, 0.12, 0.8]} args={[1.3, 0.5, 2.5]} position={[-1, 4, 2.5]} color="red" texturesImg={"java.png"} />
                <Box1 rotation={[0.1, 0.12, 0.8]} args={[1.3, 0.5, 1.3]} position={[-3, 2.99, 2.5]} color="red" texturesImg={"aws.png"} />
                <Box1 rotation={[1.8, 0.89, -0.5]} position={[-4.5, 2.34, 0.5]} color="hotpink" texturesImg={"git.png"} />
                <Box1 rotation={[0.11, 0.02, 0.91]} position={[-4.9, 1.2, -1]} color="red" texturesImg={"cSharp.png"} />
                <Box1 rotation={[0.01, 0.4, 0.1]} position={[-5.5, -1, -2]} color="purple" texturesImg={"three.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[2.3, 0, -3.3]} position={[0, -2, -3]} color="#2980b9" texturesImg={"firebase.png"} />

                <Box1 rotation={[0.1, 0.12, 0.8]} args={[1.3, 0.5, 1.3]} position={[3.5, 0.7, -2.2]} color="red" texturesImg={"digital.jpg"} />
                <Box1 rotation={[0.1, 0.12, 0]} position={[2, -1, -3]} color="#2c3e50" texturesImg={"c.png"} />
                <Box1 rotation={[0.8, 0.72, 0.11]} position={[-1.5, -3, -3.4]} color="purple" texturesImg={"py.jpg"} />

                <Box1 rotation={[1.8, 0.89, -0.5]} position={[-3.3, -2, -3.1]} color="hotpink" texturesImg={"window.jpg"} />




            </group>
        </>
    )
}



// back scene 

function BackScene() {
    const backSceneBoxRef = useRef()


    useFrame(() => {
        backSceneBoxRef.current.rotation.y += 0.0102084
        backSceneBoxRef.current.rotation.x += 0.001033

    })

    return (
        <>
            <group ref={backSceneBoxRef} >

                <Box1 rotation={[0.1, 0.12, 0.8]} args={[3.3, 0.5, -18.3]} position={[-1.2, 1.99, -21]} color="red" texturesImg={"digital.jpg"} />
                <Box1 rotation={[0.01, 0.4, 0.1]} position={[9, 2.29, -15]} color="purple" texturesImg={"three.png"} />
                <Box1 rotation={[1.8, 0.89, -0.5]} position={[-9, 6, -18.3]} color="hotpink" texturesImg={"window.jpg"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[22, 5, -22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[7, 5, -24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[7, 5, -24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[21, 5, -21]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-15, 5, -12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-8, 2, -9]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[10, 5, -19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[0, 2, -15]} color="#2980b9" texturesImg={"c.png"} />
                <OrbitControls />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[35, 3, -12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-56, 10, -16]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-42, 2, -12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-36, 9, -30]} color="#2980b9" texturesImg={"three.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[17, 2, -22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[94, 5, -32]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[89, 6, -19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[79, 13, -29]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[67, 2, -19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-21, 8, -35]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-1, 8, -42]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[50, 1, -35]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[41, 2, -19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[35, 3, -33]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[23, 3, -12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[19, 4, -19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-5, 1, 21]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-15, 11, 12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-25, 12, -13]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-35, 18, 25]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[35, 21, 12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[40, 29, 12]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[35, 32, 16]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[30, 0, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[25, 5, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[20, 12, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[16, 8, 24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[0, 15, 26]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-5, 22, 28]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-9, 45, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-12, 26, 42]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, 52, 22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, 26, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[0, 76, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[5, 32, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[9, 68, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[12, 12, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, 46, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, 32, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[16, 8, 24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[10, 15, 26]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-45, 22, 28]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-9, 45, -25]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-42, 26, 22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-18, 52, -20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, 26, 32]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[21, 76, -11]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[59, 32, 30]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[42, 68, 40]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[12, 12, -20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, 46, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, -32, 19]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[25, -5, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[20, -12, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[16, -8, 24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[0, -15, 26]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-5, -22, 28]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-9, -45, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-12, -26, 42]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, -52, 22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, -26, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[0, -76, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[5, -32, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[9, -68, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[12, -12, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, -46, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, -32, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[16, -8, 24]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[10, 1 - 5, 26]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-45, -22, 28]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-9, -45, -25]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-42, -26, 22]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-18, 52, -20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, -26, 32]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[21, -76, -11]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[59, 3 - 2, 30]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[42, 6 - 8, 40]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[12, 1 - 2, -20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-14, -46, 20]} color="#2980b9" texturesImg={"webrtc.png"} />
                <Box1 rotation={[0.4, 0.8, 0.53]} args={[-5.3, 0, -13.3]} position={[-16, -32, 19]} color="#2980b9" texturesImg={"webrtc.png"} />

            </group>
        </>
    )
}


function RandomPosGenBox() {

    useFrame(() => {

    })

    return (
        <>
            {
                [0, 2, 1, 1, 5, 1, 5, 6, 6, 1, 1, 1, 1, 53514, 4, 234, 24, , 42, 41, 4, 2134, 234, 141, 4, 324, 34, 1].map(() => (<RandomPositionBox rotation={[0.01, 0.4, 0.1]} position={[-5.5, -1, -2]} color="purple" texturesImg={"three.png"} />
                ))

            }

        </>


    )


}



function RandomPositionBox() {

    const colorMap = useLoader(TextureLoader, `/webrtc.png`)
    const box1Ref = useRef()

    const x = Math.floor(Math.random() * 90);
    const y = Math.floor(Math.random() * 90);
    const z = Math.floor(Math.random() * 90);




    useFrame(() => {

        box1Ref.current.rotation.y += 0.01
        box1Ref.current.rotation.x += 0.0001

    })
    return (
        <>
            <group castShadow ref={box1Ref} position={[x, y, z]} scale={0.3}>
                <mesh castShadow position={[0, 0, 1]}>
                    <boxGeometry args={[3, 3, 3]} />
                    <meshStandardMaterial map={colorMap} />
                </mesh>
            </group>
        </>
    )

}

// const Floor = () => {
//     return (
//         <>
//             <group receiveShadow position={[0, -2, 0]} rotation={[1.9, 0, 0]}>
//                 <mesh receiveShadow >
//                     <planeGeometry args={[6, 6, 2]} />
//                     <meshBasicMaterial color={"#ffffff"} side={DoubleSide} />
//                 </mesh>
//             </group>
//         </>
//     )
// }

function BannerAnimation() {



    const [animateWidth, setAnimateWidth] = useState(window.innerWidth / 2)

    useEffect(() => {


        window.addEventListener("resize", () => {
            setAnimateWidth(window.innerWidth / 2)
        })




    }, [])

    console.log(animateWidth, "the animate width")




    return <>

        <>

            <div
                className="bannerAnimationBox"
                style={{
                    width: `${animateWidth}px`,
                    height: '100vh',
                    opacity: 0.5,

                }}
            >

                <Canvas

                    shadowMap
                    camera={{ position: [-1.22, 5, 12], fov: 75 }}
                >
                    <color attach="background" args={['#f9f9f9']} />
                    <directionalLight
                        intensity={1}
                        castShadow
                        shadow-mapSize-height={512}
                        shadow-mapSize-width={512}
                    />
                    <ambientLight color={"#dcdde1"} />
                    <Suspense fallback={null}>
                        <BoxContainers />
                        <Cone />
                        <BackScene />
                        <OrbitControls />

                    </Suspense>

                </Canvas>
            </div>
        </>
    </>

}
export default BannerAnimation

// geometry position={[ horizontal, vertical , depth]}