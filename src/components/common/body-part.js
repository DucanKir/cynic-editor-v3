import React from 'react';

import './body-part.styles.scss';

const BodyPart = ({data, position, name, currentCharacter, categoryName, imagePosition, charOnScene}) => {
    
    const arrayNoHands = ['clothes_78', 'clothes_36','clothes_37','clothes_38','clothes_39','clothes_40',
        'clothes_41','clothes_42','clothes_43','clothes_44','clothes_15']

    const checker = value => arrayNoHands.includes(value) ? true : false

    const margin = charOnScene ? `${currentCharacter.position}px` : 0

    const display = categoryName === 'hands' && checker(currentCharacter.clothes.name) ? 'none' : 'block'

    return(
        <img 
            className={charOnScene? 'body-part-scene' : 'body-part'}
            src={`data:image/png;base64, ${data}`} 
            style={{zIndex: position, display: display, top: `${imagePosition}px`, marginLeft: margin}} 
            id={name}
        />
    );
}
export default BodyPart;