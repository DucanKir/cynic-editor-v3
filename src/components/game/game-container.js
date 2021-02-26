import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {database} from '../../firebase/firebase.utils';
import { updateImages } from '../../redux/images.actions';
import LoadingScreen from '../loading-screen/loading-screen.component';
import GameField from './game-field'

import './game-container.scss'
import { selectCurrentCharacterId } from '../../redux/characters.selector';

const GameFieldWithLoadingScreen = LoadingScreen(GameField)

class GameContainer extends React.Component{ 

    state = {
        loading: true, 
    }

    unsubscribeFromSnapshot = null;
    
    componentDidMount(){
        const {updateImages, currentCharacterId} = this.props
        const collectionRef = database.ref('images');
        this.unsubscribeFromSnapshot = collectionRef.on("value", snapshot => {
            console.log(currentCharacterId)
            updateImages(snapshot.val())
            if(currentCharacterId) {
                
                this.setState({loading: false})
            }
            
        })
    }

    startGame = () => {
        this.setState({loading: false})
    }
    
    
    render(){
        const {loading} = this.state
        return(
            
            <div className="game-container">
                <GameFieldWithLoadingScreen isLoading={loading} startGame={this.startGame}/>
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    currentCharacterId: selectCurrentCharacterId,
}) 

const mapDispatchToProps = dispatch => ({
    updateImages: imagesMap => dispatch(updateImages(imagesMap))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
