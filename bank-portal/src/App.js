import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
class App extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default App;