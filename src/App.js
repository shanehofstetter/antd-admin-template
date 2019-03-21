import React, {Component} from 'react';
import './App.css';
import {BaseLayout} from "./layouts/BaseLayout";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {PageHeader} from "antd";
import UserRoutes from "./components/users/Routes";
import Dashboard from "./components/Dashboard";
import {BaseContent} from "./layouts/BaseContent";

class App extends Component {
    render() {
        return (
            <Router>
                <BaseLayout>
                        <Switch>
                            <Route exact path={`/`} component={Dashboard}/>
                            <Route path={`/users`} component={UserRoutes}/>
                            <Route path={`/videos`} render={() => <BaseContent><PageHeader title={'videos'}/></BaseContent>}/>
                            <Route path={`*`} render={() => <BaseContent><PageHeader title={'404'}/></BaseContent>}/>
                        </Switch>
                </BaseLayout>
            </Router>
        );
    }
}

export default App;
