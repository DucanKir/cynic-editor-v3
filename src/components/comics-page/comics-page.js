import React from 'react';
import './comics-page.styles.scss'

const ComicsPage = ({scenes, showComics, toggleShowComics}) => {
    return (
        scenes.scenes.length > 0 ?
        <div className='comics-screen' style={showComics ? {display: 'block'} : {display: 'none'}}>
            <div className='comics-container'>
                <div className='buttons-container'>
                    <button onClick={() => toggleShowComics()} className="close" >Закрыть</button>
                    <button  className="download" >Скачать комикс</button>
                </div>
                {
                    scenes.scenes.map(scene => (
                        <img className="comics-scene" key={scene.id} src={scene.data} />
                    ))
                }
                
            </div>
        </div>
        :
        ""

    ) 
}

export default ComicsPage;