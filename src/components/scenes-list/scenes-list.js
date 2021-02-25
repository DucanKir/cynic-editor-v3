import React from 'react';
import { connect } from 'react-redux';
import { selectAllCharacters } from '../../redux/characters.selector';
import { selectAllScenes } from '../../redux/scenes.selector';
import {createStructuredSelector} from 'reselect';

import './scenes-list.styles.scss';
import { setCurrentCharacter } from '../../redux/characters.actions';
import EditorButton from '../common/editor-button';

const ScenesList = ({allScenes}) => {
    console.log(allScenes.scenes)
    return(
        <div className='scenes-list'>
            {allScenes.scenes.length > 0 && allScenes.scenes.map(scene =>
                <img
                    className='scene-mini' 
                    src={scene.data}
                    key={scene.id}
                    // onClick={() => setCurrentsceneacter(scene.id)}
                    
                />
            )}
        </div>
);
}
const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters,
    allScenes: selectAllScenes
})

const mapDispatchToProps = dispatch => ({
    setCurrentCharacter: (id) => dispatch(setCurrentCharacter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScenesList);