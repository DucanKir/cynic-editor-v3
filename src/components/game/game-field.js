import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import domtoimage from 'dom-to-image';
import { Link, withRouter } from 'react-router-dom'

import CharacterContainer from  '../character-container/character-container';
import CharacterEditorPanel from '../character-editor-panel/character-editor-panel';
import CharactersList from '../characters-list/characters-list';
import Scene from '../scene/scene';
import CustomButton from '../common/custom-button';

import './game-field.scss';
import ScenesList from '../scenes-list/scenes-list';
import { selectCurrentCharacter } from '../../redux/characters.selector';
import { moveCharacter, turnCharacter, setCharacterText } from '../../redux/characters.actions';
import { addScene } from '../../redux/scenes.actions';
import { selectAllScenes } from '../../redux/scenes.selector';
import ComicsPage from '../comics-page/comics-page';
import { selectBackgrounds } from '../../redux/images.selector';

class GameField extends React.Component {

    state = {
        editorLevel: true,
        charactersOnScene: [],
        chosenBackground: '',
        isLoading: true, 
        showComics: false,
        url: '',
        selectedBackground: '',
        textcolor: 'black'
    }

    componentDidMount() {
        this.setState({isLoading: false})
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

    handleTextChange = (e) => {
       const {setCharacterText} = this.props
       setCharacterText(e.target.value)
    }

    saveScene = () => {
        const {addScene} = this.props
        let node = document.getElementById('capture');
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                addScene(dataUrl)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    chooseBackground = (background) => {
        const {allBackgrounds} = this.props
        if(background.position === 2 ) {
            background.additional = allBackgrounds.find(backgr => backgr.position === 20)
        } else if (background.position === 3 ){
            background.additional = allBackgrounds.find(backgr => backgr.position === 30)
        } 
        console.log(background)
        this.setState({chosenBackground: background})
    }

    changeTextColor = (color) => {
        this.setState({textcolor: color})
    }


    render(){
        const {currentCharacter, turnCharacter, allScenes, allBackgrounds} = this.props
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
                        <div className="scene-container">
                            <Scene 
                                characters={this.state.charactersOnScene} 
                                chosenBackground={this.state.chosenBackground}
                                textcolor={this.state.textcolor}
                               
                            />
                        </div>
                    </div> 
                }
                <div className='controls'>
                    <div className="buttons" >
                        <div className="button-container">
                                <CustomButton className="button" onClick={() => this.changeLevel()}>
                                    {this.state.editorLevel ? "Перейти к созданию комикса" : "Вернуться к редактору"} 
                                </CustomButton>
                        </div>
                    </div>
                    { !this.state.isLoading && !this.state.editorLevel &&
                    <div className='controls-on-scene'>
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
                            <div className="">
                                <button onClick={() => turnCharacter()}>Повернуть персонажа</button>
                            </div>
                        </div>
                        <div className='buttons-and-text-container'>
                            <div className="text-input-container">
                                <textarea
                                    type="text"
                                    className="text"
                                    placeholder="Реплика персонажа..."
                                    maxLength='100' 
                                    onChange={(e) => this.handleTextChange(e)} 
                                />
                                <div className='options-container'>
                                    <input type="radio" id="black" name="gender" value="black" onClick={() => this.changeTextColor('black')}/>
                                    <label for="black">Черный</label><br/>
                                    <input type="radio" id="white" name="gender" value="white" onClick={() => this.changeTextColor('white')}/>
                                    <label for="white">Белый</label>
                                </div>
                            </div>
                            
                            <div>
                                <div>
                                    <button className='editor-bitton' onClick={() => this.saveScene()}>Сохранить сцену</button>
                                </div>
                                <div>
                                    <Link to="/download" className={allScenes.scenes.length ? 'editor-bitton' : 'disabled'}>
                                        Показать и скачать результат
                                    </Link>
                                </div>
                                <div>
                                    {
                                        allBackgrounds.map(backgr => (
                                            <img className='mini-backgrounds' src={`data:image/png;base64,${backgr.data}`} onClick={() => this.chooseBackground(backgr)}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentCharacter: selectCurrentCharacter,
    allScenes: selectAllScenes,
    allBackgrounds: selectBackgrounds
}) 

const mapDispatchToProps = dispatch => ({
    moveCharacter: (value) => dispatch(moveCharacter(value)),
    turnCharacter: () => dispatch(turnCharacter()),
    setCharacterText: (text) => dispatch(setCharacterText(text)),
    addScene: (image) => dispatch(addScene(image)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameField));