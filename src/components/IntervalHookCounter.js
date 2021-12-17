import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
    const [counter, setCounter] = useState(0);

    const tick = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return <div>Counter: {counter}</div>;
}

export default IntervalHookCounter;
