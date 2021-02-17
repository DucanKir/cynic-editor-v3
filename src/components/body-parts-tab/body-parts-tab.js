import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './body-parts-tab.styles.scss';
import { setCurrentCharacter } from '../../redux/characters.actions';
import EditorButton from '../common/editor-button';
import { selectAllImages, selectFaceImages, selectEyes } from '../../redux/images.selector';
import { render } from '@testing-library/react';

class BodyPartsTab extends React.Component {
    
    state = {
        isLoading: true,
        groups: {
            face: {
                eyes: 'Глаза',
                mouths: 'Рот',
                brows: 'Брови'
            },
            body: {
                hands: 'Руки',
                legs: 'Ноги',
                boobs: 'Сиськи!'
            },
            clothes: {
                clothes: ''
            },
            hair: {
                hair: '',
            },
            misc: {
                beards: 'Растительность',
                glasses: 'Очки',
                hats: 'Головные уборы',
                masks: 'Маски'
        },}
    }
    
    componentDidMount() {
        this.setState({isLoading: false})
    }
    

    render(){
        const {tab, allImages} =this.props
        console.log(this.state.groups[tab])
        return(
            <div className='body-parts-tab'>
                <div>
                    { this.state.isLoading ? 
                        <p>Loading</p> 
                        :
                        Object.entries(this.state.groups[tab]).map(entry => (
                            <div key={entry[0]}>
                                <h3>{entry[1]}</h3>
                                <div className='category-container'>
                                    {
                                        Object.values(allImages[entry[0]]).map(key => (
                                            <EditorButton 
                                                key={key.id}
                                                url={key.data}

                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )   
                    )}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = createStructuredSelector({
    allImages: selectAllImages,
})

const mapDispatchToProps = dispatch => ({
    setCurrentCharacter: (id) => dispatch(setCurrentCharacter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyPartsTab);