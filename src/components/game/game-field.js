import { render } from '@testing-library/react';
import React from 'react';

import CharacterContainer from  '../character-container/character-container';
import CharacterEditorPanel from '../character-editor-panel/character-editor-panel';
import CharactersList from '../characters-list/characters-list';
import Scene from '../scene/scene';
import CustomButton from '../common/custom-button';

import './game-field.scss';
import ScenesList from '../scenes-list/scenes-list';

class GameField extends React.Component {

    state = {
        editorLevel: true,
        charactersOnScene: [],
        chosenBackground: ''
    }

    changeLevel = () => {
        this.setState({editorLevel: !this.state.editorLevel})
    }

    addCharacterToScene = (character) => {
        const checker = this.state.charactersOnScene.find(char => char.id === character.id)
        if(!checker) {
            this.setState({charactersOnScene: [...this.state.charactersOnScene, character]})
        }
    }

    removeCharacterFromScene = (charId) => {
        const newCharList = this.state.charactersOnScene.filter(char => char.id !== charId)
        this.setState({charactersOnScene: newCharList})
    }

    render(){
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
                <div className="button-container">
                        <CustomButton className="button" onClick={() => this.changeLevel()}>
                            {this.state.editorLevel ? "Перейти к созданию комикса" : "Вернуться к редактору"} 
                        </CustomButton>
                </div>
            </div>
        );
    }
}
export default GameField;