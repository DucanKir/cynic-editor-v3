import React from 'react';

import CharacterContainer from  '../character-container/character-container';
import CharacterEditorPanel from '../character-editor-panel/character-editor-panel';
import CharactersList from '../characters-list/characters-list';
import ControlPanel from '../control-panel/control-panel';

import './game-field.scss';

const GameField = () => (

    <div className="gamefield">
         <ControlPanel />

        <div className="container">
            <CharactersList/>
            <CharacterContainer />
            <CharacterEditorPanel />
        </div>
        
    </div>
);

export default GameField;