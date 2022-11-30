import "./notfound.css"
const NotFound = () => {
    return (
        <div className='notFound'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div>
                    Result Not Found
                </div>
                <button>Try Again</button>
            </div>

        </div>
    )
}

export default NotFound