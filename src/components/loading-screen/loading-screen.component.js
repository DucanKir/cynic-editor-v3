import React from 'react';
import './loading-screen.scss'

const LoadingScreen = WrappedComponent => ({isLoading, startGame, images, ...otherProps}) => {
    return isLoading ? (
          <div className='splashscreen'>
            <h1 className="version">V3.0</h1>
            <p className="spoiler">Да, да, после первой версии сразу третья. Это долгая история</p>
            {images ? <button onClick={() => startGame()} className="startButton" >Жмяк</button> : <p className="loading">Загрузка...</p>}
          </div>

    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default LoadingScreen;