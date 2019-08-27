import {ERROR, FETCH_CHARACTERS, START, SUCCESS} from "../constants";
import {Map, Record} from "immutable";
import {getCharacterId} from "../utils";

const CharacterModel = Record({
    url: null,
    name: "",
    gender: "",
    culture: "",
    born: "",
    died: "",
    loading: false,
});

const ReducerModel = Record({
    entities: new Map(),
    isLoading: false,
    isLoaded: false,
    error: null
});

export default (characters = new ReducerModel(), action) => {
    const {type, data, error} = action;

    switch (type) {
        case FETCH_CHARACTERS + START:
            return characters.set("isLoading", true);
        case FETCH_CHARACTERS + ERROR:
            return characters
                .set("isLoading", false)
                .set("isLoaded", false)
                .set("error", error);
        case FETCH_CHARACTERS + SUCCESS:
            return characters
                .set("entities", putEntries(data, characters.get('entities')))
                .set("isLoading", false)
                .set("isLoaded", true)
                .set("error", null);
        default:
            return characters
    }
}

const putEntries = (data, map) =>
    data.reduce((acc, record) =>
            acc.set(getCharacterId(record.url), new CharacterModel(record)),
        map
    );
