function Button2(props){
    console.log("props in button",props);
    return (
        <div>
            <button>{props.title}</button>
        </div>
    )
}
export default Button2;