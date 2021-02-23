import React from 'react';

import './editor-button.styles.scss';

const EditorButton = ({url, url2, url3, url4, url5, url6, url7, 
    url8, url9, url10, charList, ...props}) => {

    const charlistUrls = {
        backgroundImage: `
            url("data:image/png;base64,${url6}"),
            url("data:image/png;base64,${url7}"),
            url("data:image/png;base64,${url8}"),
            url("data:image/png;base64,${url9}"),
            url("data:image/png;base64,${url10}"),
            url("data:image/png;base64,${url5}"),
            url("data:image/png;base64,${url3}"), 
            url("data:image/png;base64,${url2}"), 
            url("data:image/png;base64,${url}"),
            url("data:image/png;base64,${url4}")

            `
    }

    const bodyPartUrls = {
        backgroundImage: `
            url("data:image/png;base64,${url}"), 
            url("data:image/png;base64,${url2}"),
            url("data:image/png;base64,${url4}"), 
            url("data:image/png;base64,${url3}")
            `
    }

    return(
        <div className="editor-button" style={charList ? charlistUrls: bodyPartUrls} {...props}>
            
        </div>
    );
}
export default EditorButton;