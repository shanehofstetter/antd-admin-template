import React, {Component} from 'react';
import './App.css';
import {BaseLayout} from "./layouts/BaseLayout";
import {BaseContent} from "./layouts/BaseContent";

class App extends Component {
    render() {
        return (
            <BaseLayout>
                <BaseContent> content </BaseContent>
            </BaseLayout>
        );
    }
}

export default App;
