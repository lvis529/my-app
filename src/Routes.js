import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SignUp from './Signup.js';
import Login from './login.js';
import PrimarySearchAppBar from './Appbar.js';
import FeedPage from './feed.js';
import history from './history';
import Profile from "./profile.js";
import Realprofile from "./Realprof.js";
import Flip from "./Flipcard.js";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SignUp} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Feed" component={FeedPage} />
                    <Route path="/Create_trees" component={Flip} />
                    <Route path="/profile" component={Realprofile}/>
                </Switch>
            </Router>
        )
    }
}