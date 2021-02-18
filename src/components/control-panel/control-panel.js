import React from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, addCharacter, resetCharacter } from '../../redux/characters.actions';
import { selectAllCharacters, selectCurrentCharacterId } from '../../redux/characters.selector';
import {createStructuredSelector} from 'reselect';


import CustomButton from '../common/custom-button';

import './control-panel.styles.scss';
import WarningScreen from '../warning-screen/warning-screen';


class ControlPanel extends React.Component {

    state = {
        warningOpen: false,
        warningText: '',
        warningType: ''
    }

    handleWarning = () => {
        const {deleteCharacter, currentCharacterId, resetCharacter} = this.props
        this.state.warningType === 'reset' && resetCharacter()
        this.state.warningType === 'delete' && deleteCharacter(currentCharacterId)
        this.setState({ warningOpen: !this.state.warningOpen})
    }

    toggleWarning = (type) => {
        const { allCharacters } = this.props

        type === 'reset' && this.setState({ warningOpen: !this.state.warningOpen, warningText: 'Сбросить все настройки персонажа?', warningType: type})
        type === 'delete' && allCharacters.length !== 1 && this.setState({ warningOpen: !this.state.warningOpen, warningText: 'Хочешь удалить персонажа?', warningType: type})
        type === '' && this.setState({ warningOpen: !this.state.warningOpen, warningText: '', warningType: ''})
        
    }
    
    render(){
        const {addCharacter} = this.props

        return(
        <div className="control-panel">
            <CustomButton onClick={() => this.toggleWarning('reset')}>&#8634;</CustomButton>
            <CustomButton onClick={() => addCharacter()}>&#43;</CustomButton>
            <CustomButton onClick={() => this.toggleWarning('delete')}>&#x00d7;</CustomButton>
            <WarningScreen 
                warningOpen={this.state.warningOpen} 
                warningText={this.state.warningText} 
                handleWarning={this.handleWarning}
                toggleWarning={this.toggleWarning}
            />
        </div>
    );}
}
const mapStateToProps = createStructuredSelector({
    currentCharacterId: selectCurrentCharacterId,
    allCharacters: selectAllCharacters,
})

const mapDispatchToProps = dispatch => ({
    deleteCharacter: (charId) => dispatch(deleteCharacter(charId)),
    addCharacter: () => dispatch(addCharacter()),
    resetCharacter: () => dispatch(resetCharacter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);