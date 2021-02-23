import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectBackgrounds } from '../../redux/images.selector';
import CharOnScene from '../character-on-scene/char-on-scene';
import BodyPart from '../common/body-part';

import './scene.styles.scss';

const Scene = ({allBackgrounds, characters}) => {

    return(
        <div className="scene" style={{backgroundImage: `url("data:image/png;base64,${allBackgrounds[2].data}")`}}>
            {characters.map(char => (
                <CharOnScene character={char} characters={characters}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    allBackgrounds: selectBackgrounds,
})

export default connect(mapStateToProps)(Scene);