import React from 'react';
import {connect } from 'react-redux';

import {firestore, covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateImages } from '../../redux/images.actions';

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
            this.setState({loading: false})
        })
    }
    
    render(){
        return(
            <div>
            
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateImages: imagesMap => dispatch(updateImages(imagesMap))
})

export default connect(null, mapDispatchToProps)(GameContainer);
