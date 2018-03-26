import React from "react";
import ReactDOM from "react-dom";
import NaviContainer from "./src/components/NaviBar/NaviContainer";
import NaviList from "./src/components/NaviBar/NaviList";

class App extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NaviContainer>
                    <NaviList/>
                </NaviContainer>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));