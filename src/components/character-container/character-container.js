import React from 'react';
import { connect } from 'react-redux';
import './character-container.styles.scss';
import {createStructuredSelector} from 'reselect';
import BodyPart from '../common/body-part';
import { addCharacter} from '../../redux/characters.actions';
import { selectAllCharacters, selectCurrentCharacter } from '../../redux/characters.selector';

class CharacterContainer extends React.Component {

    state = {
        isLoading: true
    }
    
    componentDidMount() {
        const { allCharacters, addCharacter} = this.props
        if (allCharacters.length == 0) {
            addCharacter()
        }
        this.setState({isLoading: false})
    }

    render(){
        const {currentCharacter} =this.props
        return(
            <div className="character-container">
                {this.state.isLoading ? "Ща все будет" : Object.keys(currentCharacter).map(key => 
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