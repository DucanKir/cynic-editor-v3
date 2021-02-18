import React from 'react';
import { connect } from 'react-redux';
import './character-container.styles.scss';
import {createStructuredSelector} from 'reselect';
import BodyPart from '../common/body-part';
import { addCharacter} from '../../redux/characters.actions';
import { selectAllCharacters, selectCurrentCharacter } from '../../redux/characters.selector';
import ControlPanel from '../control-panel/control-panel';

class CharacterContainer extends React.Component {

    state = {
        isLoading: true
    }
    
    componentDidMount() {
        const { allCharacters, addCharacter} = this.props
        if (allCharacters.length === 0) {
            addCharacter()
        }
        this.setState({isLoading: false})
    }

    render(){
        const {currentCharacter} = this.props

        return(
            <div className="character-container">
                <ControlPanel />
                {this.state.isLoading ? "Ща все будет" : Object.keys(currentCharacter).map(key => 
                    key!=='id' &&  key!=='eySliderValue' && key!=='moSliderValue' && key!=='brSliderValue' && key!=='boSliderValue' ? 
                        <BodyPart 
                            key={currentCharacter[key].name} 
                            data={currentCharacter[key].data} 
                            position={currentCharacter[key].position} 
                            name={currentCharacter[key].name}
                            currentCharacter={currentCharacter}
                            categoryName={key}
                            imagePosition={currentCharacter.eySliderValue}
                        /> : ''
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