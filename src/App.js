import React, {Component} from 'react';
import './App.css';
import {BaseLayout} from "./layouts/BaseLayout";
import {BaseContent} from "./layouts/BaseContent";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {PageHeader} from "antd";
import Users from "./components/Users";

class App extends Component {
    render() {
        return (
            <Router>
                <BaseLayout>
                    <BaseContent>
                        <Switch>
                            <Route exact path={`/`} render={() => <PageHeader title={'root'}/>}/>
                            <Route exact path={`/users`} component={Users}/>
                            <Route exact path={`/videos`} render={() => <PageHeader title={'videos'}/>}/>
                            <Route path={`*`} render={() => <PageHeader title={'404'}/>}/>
                        </Switch>
                    </BaseContent>
                </BaseLayout>
            </Router>
        );
    }
}

export default App;
