import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectBackgrounds } from '../../redux/images.selector';

import './scene.styles.scss';

const Scene = ({allBackgrounds}) => {

    return(
        <div className="scene" style={{backgroundImage: `url("data:image/png;base64,${allBackgrounds[2].data}")`}}>

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    allBackgrounds: selectBackgrounds,
})

export default connect(mapStateToProps)(Scene);