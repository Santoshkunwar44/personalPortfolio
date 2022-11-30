import { useState } from "react"
import Progress_logic from "../../../components/global/Progress/Progress_logic"
import "./tools.css"
const Tools = () => {



    const [toolsState, setToolsState] = useState({})
    const [start, setStart] = useState(false)










    const handleChange = (e) => {
        if (e.target.name === "programmingLanguage") {
            setValues(e.target.name, e.target.checked)
            return
        } else if (e.target.name === "src") {
            setValues("src", e.target.files[0])
            return
        }



        setValues(e.target.name, e.target.value)
    }




    const setValues = (names, value) => {
        setToolsState((prev) => ({
            ...prev, [names]: value
        }))
    }






    const handleSubmit = () => {

        setStart(true)


    }


    return (
        <div className='toolsContainer'>
            {
                start && <Progress_logic setStart={setStart} toolsState={toolsState} setToolsState={setToolsState} />
            }
            <div className="form_item">
                <label >Technology Name</label>
                <input onChange={handleChange} className="form_values" type="text" name="name" placeholder='Technology Name' />

            </div>
            <div className="form_item">
                <label htmlFor="">Technology Type</label>
                <select onChange={handleChange} style={{ flex: 8 }} name="type" >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                    <option value="Web Tools">Web Tools</option>
                </select>


            </div>
            <div className="form_item">
                <label htmlFor="">Is Programmig Language</label>
                <div style={{ textAlign: "start", flex: 8 }}>

                    <input onChange={handleChange} type="checkbox" name="programmingLanguage" />
                </div>


            </div>
            <div className="form_item">
                <label> Add Image</label>
                <div style={{ textAlign: "start", flex: 8 }}>
                    <input onChange={handleChange} type="file" name="src" id="" />

                </div>
            </div>
            <button onClick={handleSubmit}> Add </button>


        </div>
    )
}

export default Tools