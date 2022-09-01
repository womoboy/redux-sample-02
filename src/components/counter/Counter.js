import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../../slices/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <>
            <div>Counter value is: {counterValue}</div>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>
        </>
    )
}

export default Counter;