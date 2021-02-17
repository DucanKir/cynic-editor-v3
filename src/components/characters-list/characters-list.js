import React from 'react';
import { connect } from 'react-redux';
import { selectAllCharacters } from '../../redux/characters.selector';
import {createStructuredSelector} from 'reselect';

import './characters-list.styles.scss';
import { setCurrentCharacter } from '../../redux/characters.actions';

const CharactersList = ({allCharacters, setCurrentCharacter}) => {
    console.log(allCharacters)
    return(
        <div className='characters-list'>
            {allCharacters.map(char =>
                <img
                    onClick={() => setCurrentCharacter(char.id)}
                    key={char.id}
                    className='button'
                    src={`data:image/png;base64, ${char.head.data}`}
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