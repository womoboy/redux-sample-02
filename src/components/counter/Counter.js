import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../../slices/counterSlice";

const Counter = () => {
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <div>Value: {value}</div>
            <button onClick={() => dispatch(incrementAction())} >Increment</button>
            <button onClick={() => dispatch(decrementAction())} >Decrement</button>
        </div>
    )
}

export default Counter;