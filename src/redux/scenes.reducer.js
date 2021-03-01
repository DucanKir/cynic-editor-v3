import ScenesTypes from './scenes.types';
import {addScene, deleteScene, addChar, deleteChar} from './scenes.utils'

const INITIAL_STATE = {
    scenes: [],
    charsOnScene: [],
    chosenBackground: null
};

const ScenesReducer = (state = INITIAL_STATE, action) =>  {

    switch(action.type) {
        case ScenesTypes.ADD_SCENE:
            return {
                ...state,
                scenes: addScene(state.scenes, action.payload)
            }
        case ScenesTypes.DELETE_SCENE:
            return {
                ...state,
                scenes: deleteScene(state.scenes, action.payload)
            }
        case ScenesTypes.ADD_CHAR_TO_SCENE:
            return {
                ...state,
                charsOnScene: addChar(state.charsOnScene, action.payload)
            }
        case ScenesTypes.DELETE_CHAR_FROM_SCENE:
            return {
                ...state,
                charsOnScene: deleteChar(state.charsOnScene, action.payload)
            }
        case ScenesTypes.SET_BACKGROUND:
            return {
                ...state,
                chosenBackground: action.payload
            }
        default: 
        return state;
    }
}

export default ScenesReducer;