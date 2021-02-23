import ScenesTypes from './scenes.types';
import {addScene} from './scenes.utils'

const INITIAL_STATE = {
    scenes: null
};

const ScenesReducer = (state = INITIAL_STATE, action) =>  {

    switch(action.type) {
        case ScenesTypes.ADD_SCENE:
            return {
                ...state,
                scenes: addScene(state.scenes, action.payload)
            }
        default: 
        return state;
    }
}

export default ScenesReducer;