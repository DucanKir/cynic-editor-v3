import ScenesTypes from './scenes.types';
import {addScene, deleteScene} from './scenes.utils'

const INITIAL_STATE = {
    scenes: []
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
        default: 
        return state;
    }
}

export default ScenesReducer;