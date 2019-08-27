export const getCharacterId = url => url.substr(url.lastIndexOf('/') + 1);
export const getCharacterUrl = id => `https://www.anapioficeandfire.com/api/characters/${id}`;
