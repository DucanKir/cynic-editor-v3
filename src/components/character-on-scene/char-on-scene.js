import React from 'react';
import BodyPart from '../common/body-part';

const CharOnScene = ({character, characters}) => {

    
    return(
        <div className='char-on-scene'>
            {
                Object.keys(character).map( key => key!=='id' && key !== 'position' && key!=='eyesSliderValue' && key!=='mouthsSliderValue' && key!=='browsSliderValue' && key!=='boSliderValue' ? (
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