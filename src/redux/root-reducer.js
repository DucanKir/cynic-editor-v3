import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import charactersReducer from './characters.reducer';

import imagesReducer from './images.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['images']

}

const rootReducer = combineReducers({
    collections: imagesReducer,
    characters: charactersReducer
});

export default persistReducer(persistConfig, rootReducer);

