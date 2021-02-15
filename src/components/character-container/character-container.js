import React from 'react';
import { connect } from 'react-redux';
import { selectDefaultCharacter } from '../../redux/images.selector';
import './character-container.styles.scss';
import {createStructuredSelector} from 'reselect';
import BodyPart from '../common/body-part';
import { addCharacter,setCurrentCharacter } from '../../redux/characters.actions';
import { selectAllCharacters, selectCurrentCharacter } from '../../redux/characters.selector';

class CharacterContainer extends React.Component {
    
    componentDidMount() {
       const {defaultCharacter, setCurrentCharacter} = this.props
        console.log(defaultCharacter)
        setCurrentCharacter(defaultCharacter)
    }

    render(){
        const {defaultCharacter} =this.props
        return(
            <div className="character-container">
                {/* {Object.keys(defaultCharacter).map(key =>
                    <BodyPart data={defaultCharacter[key].data}/>
                )} */}
                
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    defaultCharacter: selectDefaultCharacter,
    

})

const mapDispatchToProps = dispatch => ({
    setCurrentCharacter: (character) => dispatch(setCurrentCharacter(character))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);