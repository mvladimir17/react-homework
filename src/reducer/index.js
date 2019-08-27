import {combineReducers} from "redux";
import houses from './houses'
import {connectRouter} from "connected-react-router";
import history from "../router/hisotry";
import page from "./page";
import characters from "./characters";

export default combineReducers({
    houses,
    page,
    characters,
    router: connectRouter(history)
});
