import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    function Inc(){
        setCount(count + 1)
    }

    function Dec(){
        setCount(count - 1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Inc}>
                Increment
            </button>
            <button onClick={Dec}>
                Decrement
            </button>
        </div>
    )
}
export default Counter;