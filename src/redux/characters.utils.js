

export const addCharacter = (characters, character) => {
    const copyWithAssign =[]
    const newChars = Object.assign(copyWithAssign, characters)
    if(characters.length<7) {
        newChars.push(character)
        return newChars
    } else return characters
}

export const addCurrentCharacter = (characters, newId, oldId) => {
    if(characters.length<7) {
        return newId
    } else return oldId
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

export const setPreviousCharacter = (characters, id) => {
    const currentCharInAllChars = characters.find(char => char.id === id)
    if (characters.length>1) {
        return characters[characters.indexOf(currentCharInAllChars) -1].id
    } else return id
    
}

export const replaceCharacter = (characters, newCharacter, currentCharacterId) => {
    const oldCharacterIndex = characters.indexOf(characters.find(char => char.id === currentCharacterId))
    const copyWithAssign =[]
    const newChars = Object.assign(copyWithAssign, characters)
    newChars[oldCharacterIndex] = newCharacter
    return newChars
}

export const updateCharacter = (characters, bodyPart, currentCharacterId) => {
    const copyWithAssign =[]
    const newChars = Object.assign(copyWithAssign, characters)
    const oldCharacterIndex = characters.indexOf(characters.find(char => char.id === currentCharacterId))
    newChars[oldCharacterIndex][bodyPart[1]] = bodyPart[0]
    return newChars
}

