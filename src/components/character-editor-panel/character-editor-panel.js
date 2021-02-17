import React from 'react';
import BodyPartsTab from '../body-parts-tab/body-parts-tab';
import EditorDropdown from '../editor-dropdown.js/editor-dropdown';

import './character-editor-panel.styles.scss'

class CharacterEditorPanel extends React.Component{
    state={
        dropDownOpen: false,
        openTab: 'face'
    }

    toggleDropdown = () => {
        this.setState({dropDownOpen: !this.state.dropDownOpen})
    }

    chooseTab = (tab) => {
        this.setState({openTab: tab})
    }

    render(){
        return(
            <div className="editor-panel">
               <EditorDropdown 
                    toggleDropdown={this.toggleDropdown} 
                    dropDownOpen={this.state.dropDownOpen}
                    chooseTab={this.chooseTab}
                />
                <BodyPartsTab tab={this.state.openTab}/>
            </div>
        )
    }
}

export default CharacterEditorPanel;