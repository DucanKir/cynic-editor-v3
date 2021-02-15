import React from 'react';
import {connect } from 'react-redux';

import {database} from '../../firebase/firebase.utils';
import { updateImages } from '../../redux/images.actions';
import LoadingScreen from '../loading-screen/loading-screen.component';
import GameField from './game-field'

import './game-container.scss'

const GameFieldWithLoadingScreen = LoadingScreen(GameField)

class GameContainer extends React.Component{ 

    state = {
        loading: true, //turned off
    }

    unsubscribeFromSnapshot = null;
    
    componentDidMount(){
        const {updateImages} = this.props
        const collectionRef = database.ref('images');
        this.unsubscribeFromSnapshot = collectionRef.on("value", snapshot => {

            updateImages(snapshot.val())
            
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


const mapDispatchToProps = dispatch => ({
    updateImages: imagesMap => dispatch(updateImages(imagesMap))
    
})

export default connect(null, mapDispatchToProps)(GameContainer);
