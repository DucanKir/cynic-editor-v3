import React from 'react';
import BodyPart from '../common/body-part';

import './char-on-scene.styles.scss'

const CharOnScene = ({character, textcolor}) => {

    const pointerPosition = () => {
        
        if (character.charText.length > 90){
             return '110px'
        } else if (character.charText.length > 50) {
            return '90px'
        } else if (character.charText.length > 23) {
             return '70px'
         } else return '50px'
         
    }

    const isShowing = character.charText.length ? 'block' : 'none'

    return(
        <div className='char-on-scene'>
            <div 
                className='character-text' 
                style={{marginLeft: `${character.position}px`, color: textcolor}}
                id='text'
            >
                {character.charText}
            </div>
            <img 
                className='pointer' 
                style={{marginLeft: `${character.position}px`, top: pointerPosition(), display: isShowing}} 
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABkCAMAAACfFZZFAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAY9QTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5iDoAAAAIV0Uk5TAP+YcrkVUdk2MG4P04+yr5IMcS1QTi/zbw7SsbCR0Q1w8i5PkPHQ9E0s8AuzjtQQbfUxTFLPk660jdURbPYyS1Mr73MKzpSttYzWEmv3M1Qq7nQJzZWstovXE/g0SlUp7XUIzJart4rYFGr5NUlWKOx2B8uXqrhp+kgndwaCYRZA4zcfV3OHmn4AAAI4SURBVHic7d3FbhhREERRT+zYMTMzBB1mZmZmZmZm+vAkXS3Ha29qFvd8wZVKGvXqTUUFAAAAAAAAAAAAMHPFLHcBpqssiqrZ7ghMqS7+qpnjzkCqLUKduwNS3xB7NLo7kJpij2Z3BlKLPlit7g5Im/Zod3dAOrRHp7sD0tUde/S4OyC9fRxYpdIfewy4M5AGY4+hYXcHZCT2GB1zd0DGdWCNuzsgY6Oxx4i7AzI8FHtMuDuQdGD1uzOQJmKPvl53B6Qn9ujucndAOnVgdbg7IO1zY482dwekdV7sMejuQBqIPZrcGUiNsUdDvbsDUhd7zK91d0AW6MCqdndAFi6KPSrdHZBJHVgt7g6k5thjsTsDaUnssXSZuwOyPPZYsdLdAVmlA2u1uwPCgVUuk2tij7XuDqR1scd6dwbShthj4yZ3B2Rz7LFlq7sDsk0H1nZ3B2THzthjl7sDsntP7LHX3YG0L/bY785AOhB7HDzk7oAcjj2OHHV3QPLAOubugBw/EXucdHdATp2OPc64O5DOxh7n3BlI52OPCxfdHRAdWJcuuzsgV3RgXXV3QK5djz1uuDsgN2/FHrfdHUh3Yo+77gyke7HH/QfuDsjD2OPRY3cH5IkOrKfuDsiz57HHC3cH5OWr2OO1uwPpTezx1p2BpAOrhsfDS+Jd7PGep8NL4gMHVql81B6f3B2Qz9qD/4GUxZfYo8qdgSlf/w3yzV2B/77/KH66GzDdr9/uAgAAAAAAAAAAMAN/AApEKGjkr2IrAAAAAElFTkSuQmCC'
            />
            {
                Object.keys(character).map( key => key!=='id' && key !== 'position' && 
                key!=='eyesSliderValue' && key!=='mouthsSliderValue' && key!=='browsSliderValue' 
                && key!=='boSliderValue' && key!=='charText' && key!=='turned'? (
                    <BodyPart
                        key={character[key].name} 
                        data={character[key].data} 
                        position={character[key].position} 
                        name={character[key].name}
                        categoryName={key}
                        currentCharacter={character}
                        charOnScene
                        imagePosition={character[`${key}SliderValue`]}
                />
                ): '')
            }
        </div>
    );
}


export default CharOnScene;