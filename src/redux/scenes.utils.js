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
    return scenes.filter(char => char.id !== sceneId)
}
