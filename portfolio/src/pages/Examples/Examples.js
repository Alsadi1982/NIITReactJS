import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Example from "./Example/Example";
import ExampleList from "./ExampleList";

class Examples extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/examples'} component={ExampleList}/>
                <Route path={'/examples/:number'} component={Example}/>
            </Switch>
        )
    }
}

export default Examples;
