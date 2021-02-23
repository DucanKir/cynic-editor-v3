

export const addScene = (scenes, scene) => {
    const copyWithAssign =[]
    const newScenes = Object.assign(copyWithAssign, scenes)
    if(scenes.length<7) {
        scene.id = scene[1]
        newScenes.push(scene)
        return newScenes
    } else return scenes
}
