import React from 'react';
import { connect } from 'react-redux';
import { selectAllCharacters } from '../../redux/characters.selector';
import {createStructuredSelector} from 'reselect';

import './characters-list.styles.scss';

const CharactersList = ({allCharacters}) => {
    console.log(allCharacters)
    return(
        <div className='characters-list'>
            {allCharacters.map(char => (
                <p>{char.id}</p>
            ))}
        </div>
);
}
const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters
})

export default connect(mapStateToProps)(CharactersList);