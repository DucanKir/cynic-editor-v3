import React from 'react';
import CustomButton from '../common/custom-button';

import './control-panel.styles.scss';


const ControlPanel = () => (

    <div className="control-panel">
         <CustomButton>&#8634;</CustomButton>
         <CustomButton>&#43;</CustomButton>
         <CustomButton>&#x00d7;</CustomButton>
    </div>
);

export default ControlPanel;