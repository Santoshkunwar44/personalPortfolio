import { useRef } from "react"

const PagesUploadForm = ({ removeEdit, index, theChange, remove, editMode, page, handlePagesEdit }) => {
    const fileRef = useRef();

    return (
        <div style={{ position: "relative" }} className="page_item">
            {
                editMode ? <button onClick={() => removeEdit("pages", index)} className='featuresitem_del_btn'> - </button> : <button onClick={() => remove("pages", index)} className='featuresitem_del_btn'> - </button>
            }

            {
                editMode ? <input onChange={(e) => handlePagesEdit("pages", 'name', e.target.value, index)} id={index} type="text" name='name' placeholder={"Page Name 1"} value={page.name} /> :
                    <input onChange={(e) => theChange(e, "pages", index)} id={index} type="text" name='name' placeholder={"Page Name 1"} />
            }
            {
                editMode ?
                    <input style={{ display: "none" }} id={index} onChange={(e) => handlePagesEdit("pages", 'src', e.target.files[0], index)} ref={fileRef} type="file" name="src" /> :
                    <input style={{ display: "none" }} id={index} onChange={(e) => theChange(e, "pages", index)} ref={fileRef} type="file" name="src" />

            }
            {
                editMode ? <select value={page?.darkMode?.toString()} onChange={(e) => handlePagesEdit("pages", "darkMode", e.target.value, index)} name="darkMode" >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select> :
                    <select onChange={(e) => theChange(e, "pages", index)} name="darkMode" >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
            }

            <button onClick={() => fileRef.current.click()}>Upload Photo</button>
        </div>
    )
}

export default PagesUploadForm