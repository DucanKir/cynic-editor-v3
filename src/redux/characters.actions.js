import CharactersTypes from './characters.types';

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const setDefaultCharacter = () => ({
    type: CharactersTypes.GET_DEFAULT_CHARACTER,
    payload: uuidv4()
})

export const resetCharacter = () => ({
    type: CharactersTypes.RESET_CHARACTER,
    payload: uuidv4()
})

export const setCurrentCharacter = (id) => ({
    type: CharactersTypes.SET_CURRENT_CHARACTER,
    payload: id
})

export const updateCharacter = (bodyPart, nameOfBodypart) => ({
    type: CharactersTypes.UPDATE_CHARACTER,
    payload: [bodyPart, nameOfBodypart]
})

export const addCharacter = () => ({
    type: CharactersTypes.ADD_CHARACTER,
    payload: uuidv4()
})

export const deleteCharacter = (character) => ({
    type: CharactersTypes.DELETE_CHARACTER,
    payload: character
})

export const moveBodyPart = (number, bodyPart) => ({
    type: CharactersTypes.MOVE_BODY_PART,
    payload: [number, bodyPart]
})
