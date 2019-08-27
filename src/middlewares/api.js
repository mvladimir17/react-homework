import {ERROR, START, SUCCESS} from "../constants";
import fetchData from "./util";
import {housesPageSelector, pageSelector} from "../selectors";

export default store => next => async action => {
    const {callAPI, type, ...rest} = action;

    if (!callAPI) return next(action);

    store.dispatch({
        ...rest,
        type: type + START
    });

    try {
        const url = new URL(callAPI);
        const page = pageSelector(store.getState());
        url.searchParams.set('page', page);

        const data = housesPageSelector(store.getState()) || await fetchData(url);

        store.dispatch({
            ...rest,
            data,
            type: type + SUCCESS,
            page
        });
    } catch (error) {
        store.dispatch({
            ...rest,
            error,
            type: type + ERROR
        });
    }
};
