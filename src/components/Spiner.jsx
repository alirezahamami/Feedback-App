import spiner from './spinner.jpg'

function Spiner() {
    return (
        <img
            src={spiner}
            alt="spinner"
            style={{
                width: "150x",
                height: "150px",
                margin: "auto",
                display: "block"
            }}/>
    )
}

export default Spiner