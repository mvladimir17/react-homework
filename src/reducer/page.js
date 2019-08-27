import {SET_CURRENT_PAGE} from "../constants";

const firstPageNum = 1;

export default (page = firstPageNum, action) => {
    const {type, payload} = action;

    if (type === SET_CURRENT_PAGE) {
        return payload.currentPage;
    } else {
        return page;
    }
}
