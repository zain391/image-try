import Button2 from "./button2";
function Counter(props){
    console.log("props in Counter",props);
    return(
        <div>
            <Button2 arr={props.arr}  title="increase" color="green"/>
            <Button2 obj={props.obj} title="reset" color="white"/>
            <Button2 str={props.str} title="decrease" color="red"/>
        </div>
    )
}
export default Counter;