function IdCard(props) {
    return (
    <div className="id-card">
        <img src={props.picture}/>
        <div>
            <p><b>First name:</b>{props.firstName}</p>
            <p><b>Second name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth}</p>
        </div>
    </div>
    )
}

export default IdCard;