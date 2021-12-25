import ThirdChild from "../thirdChild"
import Button from "../button"
function SecondChild(){
    return(
        <div>
            Second child
            <ThirdChild/>
            <Button color="red" title="Second button"/>
        </div>
    )
}
export default SecondChild;