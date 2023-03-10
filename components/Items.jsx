export const Items = (props) => {
    return(
        <div>
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <h2>{props.price}</h2>
        </div>
    )
}