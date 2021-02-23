import React from 'react';

import './body-part.styles.scss';

const BodyPart = ({data, position, name, currentCharacter, categoryName, imagePosition, charOnScene}) => {
    
    const arrayNoHands = ['clothes_78', 'clothes_36','clothes_37','clothes_38','clothes_39','clothes_40',
        'clothes_41','clothes_42','clothes_43','clothes_44','clothes_15']

    const checker = value => arrayNoHands.includes(value) ? true : false

    return(
        <img 
            className={charOnScene? 'body-part-scene' : 'body-part'}
            src={`data:image/png;base64, ${data}`} 
            style={categoryName === 'hands' && checker(currentCharacter.clothes.name)
            ?
                {zIndex: position, display: 'none', top: `${imagePosition}px`}
            :
                {zIndex: position, display: 'block', top: `${imagePosition}px`}
            }  
            id={name}
        />
    );
}
export default BodyPart;