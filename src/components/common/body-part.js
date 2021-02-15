import React from 'react';

import './body-part.styles.scss';

const BodyPart = ({data}) => (
    <img className='body-part' src={`data:image/png;base64, ${data}`}/>
);

export default BodyPart;