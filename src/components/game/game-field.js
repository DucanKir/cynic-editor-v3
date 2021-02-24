import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CharacterContainer from  '../character-container/character-container';
import CharacterEditorPanel from '../character-editor-panel/character-editor-panel';
import CharactersList from '../characters-list/characters-list';
import Scene from '../scene/scene';
import CustomButton from '../common/custom-button';

import './game-field.scss';
import ScenesList from '../scenes-list/scenes-list';
import { selectCurrentCharacter } from '../../redux/characters.selector';
import { moveCharacter } from '../../redux/characters.actions';

class GameField extends React.Component {

    state = {
        editorLevel: true,
        charactersOnScene: [],
        chosenBackground: '',
        isLoading: true
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }

    componentDidUpdate() {
        console.log(this.state.charactersOnScene)
    }

    changeLevel = () => {
        this.setState({editorLevel: !this.state.editorLevel})
    }

    addCharacterToScene = (characterId) => {
        const checker = this.state.charactersOnScene.find(char => char === characterId)
        if(!checker) {
            this.setState({charactersOnScene: [...this.state.charactersOnScene, characterId]})
        }
    }

    removeCharacterFromScene = (charId) => {
        const newCharList = this.state.charactersOnScene.filter(char => char !== charId)
        this.setState({charactersOnScene: newCharList})
    }


    handleSliderChange = (e) => {
        const {moveCharacter} = this.props
        moveCharacter(e.target.value)
    }
    


    render(){
        const {currentCharacter} = this.props
        return(
            <div className="gamefield">
                {this.state.editorLevel ?
                    <div className="container">
                        <CharactersList editorLevel />
                        <CharacterContainer />
                        <CharacterEditorPanel /> 
                    </div>  
                    : 
                    <div className="container">
                        <div className="char-and-scenes-list">  
                            <CharactersList 
                                addCharacterToScene={this.addCharacterToScene}
                                removeCharacterFromScene={this.removeCharacterFromScene}
                                />
                            <ScenesList />
                        </div>
                        <Scene 
                            characters={this.state.charactersOnScene} 
                            chosenBackground={this.state.chosenBackground}

                        />
                    </div> 
                }
                
                { !this.state.isLoading && !this.state.editorLevel &&
                <div>
                    <div className="scene-slider-container">
                        <label className='slider-title'>Подвинуть персонажа</label>
                        <input
                            type="range"
                            min="0"
                            max="600"
                            className="slider"
                            defaultValue={currentCharacter.position}
                            step="5"
                            onChange={(e) => this.handleSliderChange(e)} 
                        />
                    </div>
                    <div className="text-input-container">
                        <label className='text-title'>Реплика</label>
                        <textarea
                            type="text"
                            className="text"
                            placeholder="text"
                            // onChange={(e) => this.handleSliderChange(e)} 
                        />
                    </div>
                </div>
                }
                <div className="buttons" >
                    <div className="button-container">
                            <CustomButton className="button" onClick={() => this.changeLevel()}>
                                {this.state.editorLevel ? "Перейти к созданию комикса" : "Вернуться к редактору"} 
                            </CustomButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentCharacter: selectCurrentCharacter,
}) 

const mapDispatchToProps = dispatch => ({
    moveCharacter: (value) => dispatch(moveCharacter(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameField);