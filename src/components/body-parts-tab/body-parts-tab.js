import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './body-parts-tab.styles.scss';
import { updateCharacter, moveBodyPart } from '../../redux/characters.actions';
import EditorButton from '../common/editor-button';
import { selectAllImages} from '../../redux/images.selector';
import { selectCurrentCharacter } from '../../redux/characters.selector';


class BodyPartsTab extends React.Component {
    
    state = {
        isLoading: true,
        eySliderValue: 0,
        moSliderValue: 0,
        brSliderValue: 0,
        boSliderValue: 400, 
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

    handleSliderChange(e) {
        const {moveBodyPart} = this.props
        moveBodyPart(e.target.value, e.target.id)

    }
    
    componentDidMount() {
        this.setState({isLoading: false})
    }

    setButtons = () => {
        const {tab, allImages, updateCharacter, currentCharacter} =this.props

        return(
            this.state.isLoading ? 
                <p>Loading</p> 
                :
                Object.entries(this.state.groups[tab]).map(entry => (
                    <div key={entry[0]}>
                        <h4 className='title'>{entry[1]}</h4>
                        {   
                            entry[0] === 'eyes' ||
                            entry[0] === 'mouths' ||
                            entry[0] === 'brows' 
                            ?
                            <div className="slider-container">
                                <p>Положение глаз</p>
                                <input
                                    type="range"
                                    min="-15"
                                    max="15"
                                    className="slider"
                                    defaultValue={currentCharacter.eySliderValue}
                                    id="eySliderValue"
                                    step="5"
                                    onChange={(e) => this.handleSliderChange(e)} 
                                />
                            </div>
                            : ''

                        }
                        <div className='category-container'>
                            {
                                Object.values(allImages[entry[0]]).map(key => (
                                    <EditorButton
                                        className={`${entry[0]}Button`} 
                                        onClick={(e) => updateCharacter(key, [entry[0]])}
                                        key={key.name}
                                        url={key.name.includes('cloth') ? allImages.heads[0].data : key.data}
                                        url3={
                                            key.name.includes('hands') || 
                                            key.name.includes('legs') || 
                                            key.name.includes('boobs')
                                            ? 
                                            allImages.clothes[0].data
                                            : 
                                            allImages.brows[0].data 
                                        }
                                        url2={key.name.includes('cloth') ? key.data: allImages.heads[0].data  }
                                        url4={key.name.includes('cloth') ? allImages.legs[1].data : allImages.brows[0].data }

                                    />
                                ))
                            }
                        </div>
                    </div>
                )   
            )
        )
    }
    

    render(){
        return(
            <div className='body-parts-tab'>
                <div className='scrollbox'>
                    { this.setButtons()}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = createStructuredSelector({
    allImages: selectAllImages,
    currentCharacter: selectCurrentCharacter,
})

const mapDispatchToProps = dispatch => ({
    updateCharacter: (bodyPart, nameOfBodyPart) => dispatch(updateCharacter(bodyPart, nameOfBodyPart)),
    moveBodyPart: (value, nameOfBodyPart) => dispatch(updateCharacter(value, nameOfBodyPart)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyPartsTab);