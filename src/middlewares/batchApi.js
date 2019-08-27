import {ERROR, START, SUCCESS} from "../constants";
import fetchData from "./util";
import {urlCharacterSelector} from "../selectors";

export default store => next => async action => {
    const {urls, type, ...rest} = action;

    if (!urls) return next(action);

    store.dispatch({
        ...rest,
        type: type + START
    });

    try {
        const data = await Promise.all(urls.map(url => urlCharacterSelector(store.getState(), url) || fetchData(url)));

        store.dispatch({
            ...rest,
            data,
            type: type + SUCCESS
        });
    } catch (error) {
        store.dispatch({
            ...rest,
            error,
            type: type + ERROR
        });
    }
};
