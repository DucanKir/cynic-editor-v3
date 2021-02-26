import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectAllCharacters } from '../../redux/characters.selector';
import { selectBackgrounds } from '../../redux/images.selector';
import CharOnScene from '../character-on-scene/char-on-scene';

import './scene.styles.scss';

const Scene = ({chosenBackground, characters, allCharacters, textcolor, allBackgrounds}) => {

    const charactersOnScene = []
    for( let i = 0; i < allCharacters.length; i++) {
        for( let j = 0; j < allCharacters.length; j++)
        if (allCharacters[i].id == characters[j]) {
            charactersOnScene.push(allCharacters[i])
        }
    }

    return(
        <div 
            id='capture' 
            className="scene" 
            style={chosenBackground ? 
                {backgroundImage: `url("data:image/png;base64,${chosenBackground.data}")`}
                :
                {backgroundImage: `url("data:image/png;base64,${allBackgrounds[2].data}")`}
            }
            >
            {charactersOnScene.map(char => (
                <CharOnScene textcolor={textcolor} key={char.id} character={char} characters={charactersOnScene}/>
            ))}
            <div className="additional" style={chosenBackground.additional && {backgroundImage: `url("data:image/png;base64,${chosenBackground.additional.data}")`}}/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters,
    allBackgrounds: selectBackgrounds
})

export default connect(mapStateToProps)(Scene);