import {applyMiddleware, createStore} from "redux";
import api from "../middlewares/api";
import reducer from '../reducer'
import batchApi from "../middlewares/batchApi";
import {routerMiddleware} from "connected-react-router";
import history from "../router/hisotry";

const enhancer = applyMiddleware(
    api,
    batchApi,
    routerMiddleware(history)
);

export default initialState => createStore(reducer, initialState, enhancer);
