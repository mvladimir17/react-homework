import React from 'react';
import HouseList from './components/house-list'
import createStore from "./store";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import {Redirect, Route, Switch} from "react-router-dom";
import history from "./router/hisotry";
import Character from "./components/character";

const store = createStore();

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/houses/:page" component={HouseList}/>
                    <Route path="/people/:id" component={Character}/>
                    <Redirect from="/" exact to="/houses/1"/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
