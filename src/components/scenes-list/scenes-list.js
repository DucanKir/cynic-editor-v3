import React from 'react';
import { connect } from 'react-redux';
import { selectAllCharacters } from '../../redux/characters.selector';
import { selectAllScenes } from '../../redux/scenes.selector';
import {createStructuredSelector} from 'reselect';

import './scenes-list.styles.scss';
import { deleteScene } from '../../redux/scenes.actions';
import WarningScreen from '../warning-screen/warning-screen';


class ScenesList extends React.Component {

    state ={
        warningOpen: false,
        selectetPreview: null,
        showPreview: false

    }

    handleWarning = () => {
        const {deleteScene} = this.props
        deleteScene(this.state.currentScene)
        this.setState({ warningOpen: !this.state.warningOpen})
    }

    toggleWarning = (id) => {
        this.setState({ warningOpen: !this.state.warningOpen, currentScene: id})
        
    }
    showScene = (id) => {
        const {allScenes} = this.props
        const scene = allScenes.scenes.find(scene => scene.id === id)
        this.setState({selectetPreview: scene.data, showPreview: true})
    }

    closePreview = () => {
        this.setState({showPreview: false})
    }
    
    render() {
        const {allScenes, deleteScene} = this.props
        return(
            <div className='scenes-list'>
                {allScenes.scenes.length > 0 && allScenes.scenes.map(scene =>
                <div className="mini-scene-container" key={scene.id}>
                    <img
                        className='scene-mini' 
                        src={scene.data}
                        key={scene.id}
                        onClick={() => this.showScene(scene.id)}
                        
                    />
                    <button className="delete-button" onClick={() => this.toggleWarning(scene.id)}>x</button>
                </div>
                )}
                <WarningScreen 
                    warningOpen={this.state.warningOpen} 
                    warningText='Удалить сцену?' 
                    handleWarning={this.handleWarning}
                    toggleWarning={this.toggleWarning}
                />
                <div className={this.state.showPreview ? "preview" : "closed-preview"}>
                    <img src={this.state.selectetPreview}/>
                    <button onClick={this.closePreview}>Закрыть</button>
                </div>
            </div>
);}
}
const mapStateToProps = createStructuredSelector({
    allCharacters: selectAllCharacters,
    allScenes: selectAllScenes
})

const mapDispatchToProps = dispatch => ({
    deleteScene: (id) => dispatch(deleteScene(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScenesList);