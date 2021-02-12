import React from 'react';
import {connect } from 'react-redux';

import {firestore, covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateImages } from '../../redux/images.actions';
import LoadingScreen from '../loading-screen/loading-screen.component';
import GameField from './game-field'

import './game-container.scss'

const GameFieldWithLoadingScreen = LoadingScreen(GameField)

class GameContainer extends React.Component{ 

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateImages} = this.props
        const collectionRef = firestore.collection('backgrounds');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            
            const imagesMap = covertCollectionsSnapshotToMap(snapshot, 'backgrounds')
            console.log(imagesMap)
            updateImages(imagesMap)
            
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
