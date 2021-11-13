import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import App from './App';
import Schedlr from './Schedlr';

function Main() {
    return <Router>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/Scheldr" component={Schedlr}></Route>
    </Router>
}
export default Main;