import React from 'react';
import BodyPart from '../common/body-part';

const CharOnScene = ({character, characters}) => {
    const indexOfChar = characters.indexOf(characters.find(char => char.id === character.id))
    
    return(
        <div className='char-on-scene'>
            {
                Object.keys(character).map( key => key!=='id' &&  key!=='eyesSliderValue' && key!=='mouthsSliderValue' && key!=='browsSliderValue' && key!=='boSliderValue' ? (
                    <BodyPart
                    key={character[key].name} 
                    data={character[key].data} 
                    position={character[key].position} 
                    name={character[key].name}
                    categoryName={key}
                    currentCharacter={character}
                    charOnScene
                    
                    
                />
                ): '')
            }
        </div>
    );
}


export default CharOnScene;