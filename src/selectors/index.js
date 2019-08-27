import {getCharacterId} from "../utils";

export const pageSelector = state => state.page;
export const housesSelector = state => state.houses.entities;
export const housesPageSelector = state => housesSelector(state).get(pageSelector(state));
export const housesLoadingSelector = state => state.houses.isLoading;
export const charactersLoadingSelector = state => state.characters.isLoading;
export const charactersSelector = state => state.characters.entities;

export const urlCharacterSelector = (state, url) => charactersSelector(state).get(getCharacterId(url));
export const idCharacterSelector = (state, id) => charactersSelector(state).get(id);
