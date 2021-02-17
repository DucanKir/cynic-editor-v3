import React from 'react';

import './editor-button.styles.scss';

const EditorButton = ({url, url2, url3, charList, ...props}) => {

    const charlistUrls = {
        backgroundImage: `
            url("data:image/png;base64,${url3}"), 
            url("data:image/png;base64,${url2}"), 
            url("data:image/png;base64,${url}")`
    }

    const bodyPartUrls = {
        backgroundImage: `url("data:image/png;base64,${url}"), url("data:image/png;base64,${url2}"), url("data:image/png;base64,${url3}")`
    }

    return(
        <div className="editor-button" style={charList ? charlistUrls: bodyPartUrls} {...props}></div>
    );
}
export default EditorButton;