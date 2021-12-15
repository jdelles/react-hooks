import React from "react";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";

function App() {
    return (
        <div className="App">
            <ClassCounterOne />
            <HookCounterOne />
            {/* <HookCounterFour /> */}
            {/* <HookCounterThree /> */}
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
        </div>
    );
}

export default App;
