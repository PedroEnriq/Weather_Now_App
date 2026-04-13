import '../stylecomponents/Buttons.css'


function Button(props) {
    return (
        <>
            <button className={`${props.variant}`} onClick={props.onClick}>
                {props.children} 
            </button>
        </>
    )
}

export default Button