import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectAllCharacters } from '../../redux/characters.selector';
import { selectBackgrounds } from '../../redux/images.selector';
import CharOnScene from '../character-on-scene/char-on-scene';

import './scene.styles.scss';

const Scene = ({allBackgrounds, characters, allCharacters}) => {

    const charactersOnScene = []
    for( let i = 0; i < allCharacters.length; i++) {
        for( let j = 0; j < allCharacters.length; j++)
        if (allCharacters[i].id == characters[j]) {
            charactersOnScene.push(allCharacters[i])
        }
    }

    return(
        <div id='capture' className="scene" style={{backgroundImage: `url("data:image/png;base64,${allBackgrounds[2].data}")`}}>
            {charactersOnScene.map(char => (
                <CharOnScene key={char.id} character={char} characters={charactersOnScene}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    allBackgrounds: selectBackgrounds,
    allCharacters: selectAllCharacters
})

export default connect(mapStateToProps)(Scene);