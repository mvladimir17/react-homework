import {ERROR, FETCH_HOUSES, START, SUCCESS} from "../constants";
import {Map, Record} from "immutable";

const HouseModel = Record({
    url: null,
    name: "",
    coatOfArms: "",
    swornMembers: [],
    loading: false,
});

const ReducerModel = Record({
    entities: new Map(),
    isLoading: false,
    isLoaded: false,
    error: null
});

export default (houses = new ReducerModel(), action) => {
    const {type, data, error, page} = action;

    switch (type) {
        case FETCH_HOUSES + START:
            return houses.set("isLoading", true);
        case FETCH_HOUSES + ERROR:
            return houses
                .set("isLoading", false)
                .set("isLoaded", false)
                .set("error", error);
        case FETCH_HOUSES + SUCCESS:
            const records = data.map(house => new HouseModel(house));
            return houses
                .set("entities", houses.get('entities').set(page, records))
                .set("isLoading", false)
                .set("isLoaded", true)
                .set("error", null);
        default:
            return houses
    }
}
