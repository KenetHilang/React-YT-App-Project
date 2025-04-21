

function Boxes(props) {

    return(
        <div className={`bg-red-100 relative aspect-video m-4 w-48 h-28 ${props.kelas || ""}`} >
                <p>{props.angka}</p>
        </div>
    )
}

export default Boxes;