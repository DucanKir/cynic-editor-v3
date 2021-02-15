import CharactersTypes from './characters.types';

export const setDefaultCharacter = (character) => ({
    type: CharactersTypes.GET_DEFAULT_CHARACTER,
    payload: character
})

export const setCurrentCharacter = (character) => ({
    type: CharactersTypes.SET_CURRENT_CHARACTER,
    payload: character
})

export const addCharacter = (character) => ({
    type: CharactersTypes.ADD_CHARACTER,
    payload: character
})
