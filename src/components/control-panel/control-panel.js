import React from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, addCharacter} from '../../redux/characters.actions';
import { selectCurrentCharacterId } from '../../redux/characters.selector';
import {createStructuredSelector} from 'reselect';


import CustomButton from '../common/custom-button';

import './control-panel.styles.scss';


const ControlPanel = ({deleteCharacter, addCharacter, currentCharacterId}) => {
    return(
        <div className="control-panel">
            <CustomButton>&#8634;</CustomButton>
            <CustomButton onClick={() => addCharacter()}>&#43;</CustomButton>
            <CustomButton onClick={() => deleteCharacter(currentCharacterId)}>&#x00d7;</CustomButton>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    currentCharacterId: selectCurrentCharacterId,
})

const mapDispatchToProps = dispatch => ({
    deleteCharacter: (charId) => dispatch(deleteCharacter(charId)),
    addCharacter: () => dispatch(addCharacter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);