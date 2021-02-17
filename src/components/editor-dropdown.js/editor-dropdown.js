import React from 'react';

import './editor-dropdown.styles.scss';


const EditorDropdown = ({toggleDropdown, dropDownOpen, chooseTab, tabName}) => {

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
                <h3>{tabName}<span className='down-arrow'>&#5167;</span></h3>
            </div>
            <div className={dropDownOpen ? 'dropdown-contents open' : 'dropdown-contents closed'}>
                {
                    Object.entries(tabs).map(tab => (
                        <div key={tab[0]} onClick={(e)=> chooseTab(e)} className='option' name={tab[1]} id={tab[0]}>{tab[1]}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default EditorDropdown;