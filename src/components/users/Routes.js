import {Route, Switch} from "react-router-dom";
import React from "react";
import NotFound from "../errors/NotFound";
import Users from "./Users";
import NewUser from "./NewUser";

const Routes = (props) => {
    const match = props.match;
    return <Switch>
        <Route exact path={`${match.path}`} component={Users}/>
        <Route exact path={`${match.path}/create`} component={NewUser}/>
        <Route path={`${match.path}/*`} component={NotFound}/>
    </Switch>
};

export default Routes;