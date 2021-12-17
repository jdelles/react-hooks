import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <div className="App">
            <UserContext.Provider value={"James"}>
                <ChannelContext.Provider value={"Code Evolution"}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
            {/* <DataFetching /> */}
            {/* <IntervalClassCounter /> */}
            {/* <IntervalHookCounter /> */}
            {/* <MouseContainer /> */}
            {/* <HookMouse /> */}
            {/* <ClassMouse /> */}
            {/* <ClassCounterOne /> */}
            {/* <HookCounterOne /> */}
            {/* <HookCounterFour /> */}
            {/* <HookCounterThree /> */}
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
        </div>
    );
}

export default App;
