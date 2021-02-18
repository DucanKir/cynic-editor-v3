import React from 'react';
import { connect } from 'react-redux';
import { selectAllCharacters } from '../../redux/characters.selector';
import {createStructuredSelector} from 'reselect';

import './characters-list.styles.scss';
import { setCurrentCharacter } from '../../redux/characters.actions';
import EditorButton from '../common/editor-button';

const CharactersList = ({allCharacters, setCurrentCharacter}) => {
    return(
        <div className='characters-list'>
            {allCharacters.map(char =>
                <EditorButton 
                    charList
                    onClick={() => setCurrentCharacter(char.id)}
                    key={char.id}
                    url={char.head.data}
                    url2={char.eyes.data}
                    url3={char.mouths.data}
                    url4={char.clothes.data}
                    url5={char.hair.data}
                    url6={char.masks.data}
                    url7={char.glasses.data}
                    url8={char.beards.data}
                    url9={char.hats.data}
                    url10={char.brows.data}
                />
            )}
        </div>
);
}
const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters
})

const mapDispatchToProps = dispatch => ({
    setCurrentCharacter: (id) => dispatch(setCurrentCharacter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);