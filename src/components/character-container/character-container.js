import React from 'react';
import { connect } from 'react-redux';
import './character-container.styles.scss';
import {createStructuredSelector} from 'reselect';
import BodyPart from '../common/body-part';
import { addCharacter} from '../../redux/characters.actions';
import { selectAllCharacters, selectCurrentCharacter } from '../../redux/characters.selector';

class CharacterContainer extends React.Component {
    
    componentDidMount() {
        const { allCharacters, setDefaultCharacter} = this.props
        console.log(allCharacters.length)
        if (allCharacters.length == 0) {
            console.log('DONE')
            addCharacter()
        }
    }

    render(){
        const {currentCharacter} =this.props
        return(
            <div className="character-container">
                {Object.keys(currentCharacter).map(key => 
                    key!=='id' ? <BodyPart key={currentCharacter[key].name} data={currentCharacter[key].data}/> : ''
                )}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentCharacter: selectCurrentCharacter,
    allCharacters: selectAllCharacters
})

const mapDispatchToProps = dispatch => ({
    addCharacter: () => dispatch(addCharacter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);