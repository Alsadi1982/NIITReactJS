import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import Examples from "../../pages/Examples";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} render={()=><div>Home</div>}/>
                    <Route path={'/examples'} component={Examples}/>
                    <Route path={'/resume'} render={()=><div>Resume</div>}/>
                    <Route path={'*'} render={()=><div>404 Not Found</div>}/>
                </Switch>
            </div>
        )
    }
}

export default Main;