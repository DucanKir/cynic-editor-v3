

export const addCharacter = (characters, character) => {
    characters.push(character)
    return characters
}

export const addDefaultCharacter = (character, uuid) => {
    const newChar = JSON.parse(JSON.stringify(character))
    newChar.id = uuid
    return newChar
}

export const removeCharacter = (characters, characterId) => {
    if(characters.length>1){
        return characters.filter(char => char.id !== characterId)
    } else return characters
}

export const setPreviousCharacter = (characters, character) => {
    const currentCharInAllChars = characters.find(char => char.id === character.id)
    if (characters.length>1) {
        return characters[characters.indexOf(currentCharInAllChars) -1]
    } else return character
    
}