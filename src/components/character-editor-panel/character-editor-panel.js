import React from 'react';
import BodyPartsTab from '../body-parts-tab/body-parts-tab';
import EditorDropdown from '../editor-dropdown.js/editor-dropdown';

import './character-editor-panel.styles.scss'

class CharacterEditorPanel extends React.Component{
    state={
        dropDownOpen: false,
        openTab: 'face',
        tabName: 'Морда лица'
    }

    toggleDropdown = () => {
        var myDiv = document.getElementById('scroll');
        myDiv.scrollTop = 0;
        this.setState({dropDownOpen: !this.state.dropDownOpen})
    }

    chooseTab = (e) => {
        const name = e.target.getAttribute('name')
        this.setState({openTab: e.target.id, tabName: name, dropDownOpen: false})
    }

    render(){
        return(
            <div className="editor-panel">
               <EditorDropdown 
                    toggleDropdown={this.toggleDropdown} 
                    dropDownOpen={this.state.dropDownOpen}
                    chooseTab={this.chooseTab}
                    tabName={this.state.tabName}
                />
                <div className='tab scrollbox' id='scroll'>
                    <BodyPartsTab tab={this.state.openTab}/>
                </div>
            </div>
        )
    }
}

export default CharacterEditorPanel;