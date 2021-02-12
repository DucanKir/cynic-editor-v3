import ImagesTypes from './images.types';

const INITIAL_STATE = {
    images: null
};

const imagesReducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type) {
        case ImagesTypes.UPDATE_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default: 
        return state;
    }
}

export default imagesReducer;