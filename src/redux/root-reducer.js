import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import imagesReducer from './images.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['images']

}

const rootReducer = combineReducers({
    images: imagesReducer
});

export default persistReducer(persistConfig, rootReducer);

