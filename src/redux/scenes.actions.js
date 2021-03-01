import ScenesTypes from './scenes.types';

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const addScene = (image) => ({
    type: ScenesTypes.ADD_SCENE,
    payload: [image, uuidv4()]
})

export const deleteScene = (imageId) => ({
    type: ScenesTypes.DELETE_SCENE,
    payload: imageId
})

export const addCharToScene = (imageId) => ({
    type: ScenesTypes.ADD_CHAR_TO_SCENE,
    payload: imageId
})

export const deleteCharFromScene = (imageId) => ({
    type: ScenesTypes.DELETE_CHAR_FROM_SCENE,
    payload: imageId
})

export const setBackground = (imageId) => ({
    type: ScenesTypes.SET_BACKGROUND,
    payload: imageId
})