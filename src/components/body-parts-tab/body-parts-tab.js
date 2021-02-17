import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './body-parts-tab.styles.scss';
import { updateCharacter } from '../../redux/characters.actions';
import EditorButton from '../common/editor-button';
import { selectAllImages} from '../../redux/images.selector';


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
        const {tab, allImages, updateCharacter} =this.props
        console.log(this.state.groups[tab])
        return(
            <div className='body-parts-tab'>
                <div className='scrollbox'>
                    { this.state.isLoading ? 
                        <p>Loading</p> 
                        :
                        Object.entries(this.state.groups[tab]).map(entry => (
                            <div key={entry[0]}>
                                <h4 className='title'>{entry[1]}</h4>
                                <div className='category-container'>
                                    {
                                        Object.values(allImages[entry[0]]).map(key => (
                                            <EditorButton
                                                className={`${entry[0]}Button`} 
                                                onClick={(e) => updateCharacter(key, [entry[0]])}
                                                key={key.id}
                                                url={key.data}
                                                url2={allImages.heads[0].data}
                                                url3={allImages.body[0].data}

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
    updateCharacter: (bodyPart, nameOfBodyPart) => dispatch(updateCharacter(bodyPart, nameOfBodyPart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyPartsTab);