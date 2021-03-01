import scene from "../components/scene/scene"


export const addScene = (scenes, newScene) => {
    const copyWithAssign =[]
    const newScenes = Object.assign(copyWithAssign, scenes)
    if(scenes.length<7) {
        const scene = {}
        scene.id = newScene[1]
        scene.data = newScene[0]
        newScenes.push(scene)
        return newScenes
    } else return scenes
}

export const deleteScene = (scenes, sceneId) => {
    return scenes.filter(scene => scene.id !== sceneId)
}

export const addChar = (chars, charId) => {
    const copyWithAssign =[]
    const newChars = Object.assign(copyWithAssign, chars)
    const checker = newChars.find(char => char === charId)
    if(!checker) {
        newChars.push(charId)
        return newChars
    } else return chars
}

export const deleteChar = (chars, charId) => {
    console.log(chars)
    return chars.filter(char => char !== charId)
}