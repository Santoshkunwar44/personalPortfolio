import "./notfound.css"
const NotFound = () => {
    return (
        <div className='notFound'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "550px", gap: '1rem' }}>
                <div>
                    <img width={"350px"} src="assets/images/notfound.png" alt="not-found" />

                </div>
                <h1>Not Found</h1>
                <p>Edit the filter and search again</p>
                <button className="searchAgainBtn">Try Again</button>
            </div>

        </div>
    )
}

export default NotFound