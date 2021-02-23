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

    addCharacterToScene = (char) => {
        this.setState({charactersOnScene: [...this.state.charactersOnScene, char]})
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
                            <CharactersList addCharacterToScene={this.addCharacterToScene}/>
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