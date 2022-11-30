import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../utility/firebase";
import { useCallback, useEffect, useRef, useState } from "react";





const useUploadImage = (images, path, toolsState) => {


    const [urls, setUrls] = useState([])
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)




    useEffect(() => {
        if (!images) {
            return setError("no images")
        }
        else if (urls?.length === images?.length) {
            setSuccess(true)
        }


    }, [urls])
    useEffect(() => {
        console.log(" upload hook  initialized", images)
        if (images?.length === 0) {
            setSuccess(true)
        }
    }, [])


    useEffect(() => {
        for (let i = 0; i < images.length; i++) {
            if (!images[i]?.name) return;
            upload(images[i], setUrls)
        }

    }, [])

    return {
        success,
        urls
    }
}




const upload = (file, setUrls, taskRef, setError) => {



    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, file.name)
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress + '%')
        },
        (error) => {
            console.log(error)
            setError(error)
        },
        async () => {

            const theUrl = await getDownloadURL(uploadTask.snapshot.ref)
            setUrls((prev) => ([...prev, { name: file.index, url: theUrl }]))
            console.log(theUrl)

        }
    );


}








export default useUploadImage