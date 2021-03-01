import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import charactersReducer from './characters.reducer';

import imagesReducer from './images.reducer';
import ScenesReducer from './scenes.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['characters', 'scenes']

}

const rootReducer = combineReducers({
    collections: imagesReducer,
    characters: charactersReducer,
    scenes: ScenesReducer
});

export default persistReducer(persistConfig, rootReducer);

