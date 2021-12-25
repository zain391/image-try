function Button(props){
    console.log(props);
    return (
        <div>
            <button style={{style:props.color}}>{props.title}</button>
        </div>
    )
}
export default Button;