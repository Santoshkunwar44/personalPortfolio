import { CircularProgressbar } from "react-circular-progressbar"
const Progress = ({
    progress

}) => {


    const progressStyle = {
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#2423235c",
        position: "fixed",
        top: "0",
        left: "0"
    }
    return (

        <CircularProgressbar styles={{ position: "absolute" }} value={66} />

    )
}

export default Progress