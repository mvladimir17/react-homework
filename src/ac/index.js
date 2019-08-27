import {FETCH_CHARACTERS, FETCH_HOUSES, SET_CURRENT_PAGE} from "../constants";

export const fetchHouses = () => ({
    type: FETCH_HOUSES,
    callAPI: 'https://www.anapioficeandfire.com/api/houses'
});

export const fetchCharacters = urls => ({
    type: FETCH_CHARACTERS,
    urls
});

export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    payload: {currentPage}
});
