import React from 'react';

import './editor-dropdown.styles.scss';


const EditorDropdown = ({toggleDropdown, dropDownOpen, chooseTab}) => {

    const tabs = {
        face: 'Морда лица',
        body: 'Конечности и тушка',
        clothes: 'Шмот',
        hair: 'Волосы',
        misc: 'Всякое'
    }

    return(
        <div className='editor-dropdown'>
            <div onClick={toggleDropdown} className='dropdown-button'>
                open
            </div>
            <div className={dropDownOpen ? 'dropdown-contents open' : 'dropdown-contents closed'}>
                {
                    Object.entries(tabs).map(tab => (
                        <div key={tab[0]} onClick={(e)=> chooseTab(e.target.id)} className='option' id={tab[0]}>{tab[1]}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default EditorDropdown;