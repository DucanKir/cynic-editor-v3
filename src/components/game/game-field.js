import React from 'react';

import CharacterContainer from  '../character-container/character-container';

import './game-field.scss';

const GameField = () => (

    <div className="gamefield">
         <ControlPanel />
        {/* <CharactersList /> */}
        <CharacterContainer />
        {/* <CharacterEditorPanel /> */}
    </div>
);

export default GameField;