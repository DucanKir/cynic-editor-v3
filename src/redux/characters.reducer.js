import CharactersTypes from './characters.types';
import { addCharacter } from './characters.utils';

const INITIAL_STATE = {
    currentCharacter: {},
    allCharacters:[]
};

const charactersReducer = (state = INITIAL_STATE, action) =>  {

    switch(action.type) {
        case CharactersTypes.SET_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacter: action.payload
            }
        case CharactersTypes.ADD_CHARACTER:
            return {
                ...state,
                allCharacters: addCharacter(state.characters, action.payload)
            };
        
        default: 
            return state
            
    }
}

export default charactersReducer;