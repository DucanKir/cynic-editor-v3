import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectAllCharacters } from '../../redux/characters.selector';
import { selectBackgrounds } from '../../redux/images.selector';
import { selectCharsOnScene , selectCurrentBackground} from '../../redux/scenes.selector';
import CharOnScene from '../character-on-scene/char-on-scene';

import './scene.styles.scss';

const Scene = ({background, allCharacters, textcolor, allBackgrounds, charsOnScene}) => {

    const charactersOnScene = []
    for( let i = 0; i < allCharacters.length; i++) {
        for( let j = 0; j < allCharacters.length; j++)
        if (allCharacters[i].id == charsOnScene[j]) {
            charactersOnScene.push(allCharacters[i])
        }
    }

    return(
        <div 
            id='capture' 
            className="scene" 
            style={background ? 
                {backgroundImage: `url("data:image/png;base64,${background.data}")`}
                :
                {backgroundImage: `url("data:image/png;base64,${allBackgrounds[2].data}")`}
            }
            >
            {charactersOnScene.map(char => (
                <CharOnScene textcolor={textcolor} key={char.id} character={char} characters={charactersOnScene}/>
            ))}
            <div className="additional" style={background && background.additional && {backgroundImage: `url("data:image/png;base64,${background.additional.data}")`}}/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters,
    allBackgrounds: selectBackgrounds,
    charsOnScene: selectCharsOnScene,
    background: selectCurrentBackground
})

export default connect(mapStateToProps)(Scene);