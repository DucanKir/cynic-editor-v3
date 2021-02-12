import React from 'react'

function sortBodyImages(array) {
    array.sort((a, b) => {
      return +(a.name.replace(/[^0-9]/g, '')) - +(b.name.replace(/[^0-9]/g, ''))
    })
  }


export function setEyesButtons(eyes, applyBodyPart) {
    let images = eyes
    sortBodyImages(images)

    return(
      <div className='buttonsContainer '>
        {images.map(image =>
          <div
          key={image.id}
          style={{backgroundImage: `url(/api/images/${image.name})`}}
          className='eyesButton'
          id={image.name}
          onClick={applyBodyPart}
          name='appliedEyes'>

          </div>
        )}
      </div>
    )
  }

  export function  setBrowsButtons(brows, applyBodyPart, resetPart) {
    const images = brows
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='browsButton'
          onClick={resetPart}
          id='appliedBrows'style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name})`}}
          className='browsButton'
          onClick={applyBodyPart}
          name='appliedBrows'>

          </div>
        )}
      </div>
    )
  }

  export function  setMouthButtons(mouths, applyBodyPart) {
    const images = mouths
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name})`}}
          className='mouthButton'
          onClick={applyBodyPart}
          name='appliedMouths'>

          </div>
        )}
      </div>
    )
  }

  export function  setHandsButtons(hands, applyBodyPart) {
    const images = hands
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png), url(/api/images/Body.png)`}}
          className='handsButton'
          onClick={applyBodyPart}
          name='appliedHands'>

          </div>
        )}
      </div>
    )
  }

  export function  setLegsButtons(legs, applyBodyPart) {
    const images = legs
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png), url(/api/images/Body.png)`}}
          className='legsButton'
          onClick={applyBodyPart}
          name='appliedLegs'>

          </div>
        )}
      </div>
    )
  }

  export function  setBoobsButtons(boobs, resetPart, applyBodyPart) {
    const images = boobs
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='boobsButton'
          onClick={resetPart}
          id='appliedBoobs'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png), url(/api/images/Body.png)`}}
          className='boobsButton'
          onClick={applyBodyPart}
          name='appliedBoobs'>

          </div>
        )}
      </div>
    )
  }

  export function  setClothesButtons(clothes, applyBodyPart) {
    const images = clothes
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='boobsButton'
          onClick={applyBodyPart}
          id='Body'
          className='clothesButton'
          name='appliedClothes'
          style={{backgroundImage: `url(/api/images/Head1.png), url(/api/images/Hands1.png), url(/api/images/Body), url(/api/images/Legs2_0.png)`}}>
          
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={ image.name === 'Clothes_15' || 
                  image.name === 'Clothes_36' ||
                  image.name === 'Clothes_37' ||
                  image.name === 'Clothes_38' ||
                  image.name === 'Clothes_39' ||
                  image.name === 'Clothes_40' ||
                  image.name === 'Clothes_41' ||
                  image.name === 'Clothes_42' ||
                  image.name === 'Clothes_43' ||
                  image.name === 'Clothes_44' ||
                  image.name === 'Clothes_78' ? 
                  {backgroundImage: `url(/api/images/Head1.png), url(/api/images/${image.name}), url(/api/images/Legs2_0.png)`} 
                  : {backgroundImage: `url(/api/images/Head1.png), url(/api/images/Hands1.png), url(/api/images/${image.name}), url(/api/images/Legs2_0.png)`
                }}
          className='clothesButton'
          onClick={applyBodyPart}
          name='appliedClothes'>

          </div>
        )}
      </div>
    )
  }

  export function  setHairButtons(hair, resetPart, applyBodyPart) {
    const images = hair
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='hairButton'
          onClick={resetPart}
          id='appliedHair'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png)`}}
          className='hairButton'
          onClick={applyBodyPart}
          name='appliedHair'>

          </div>
        )}
      </div>
    )
  }

  export function  setBeardButtons(beards, resetPart, applyBodyPart) {
    const images = beards
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='hairButton'
          onClick={resetPart}
          id='appliedBeard'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png)`}}
          className='hairButton'
          onClick={applyBodyPart}
          name='appliedBeard'>

          </div>
        )}
      </div>
    )
  }
  export function  setGlassesButtons(glasses, resetPart, applyBodyPart) {
    const images = glasses
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='hairButton'
          onClick={resetPart}
          id='appliedGlasses'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png)`}}
          className='hairButton'
          onClick={applyBodyPart}
          name='appliedGlasses'>

          </div>
        )}
      </div>
    )
  }

  export function  setHatsButtons(hats, resetPart, applyBodyPart) {
    const images = hats
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='hairButton'
          onClick={resetPart}
          id='appliedHats'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png)`}}
          className='hairButton'
          onClick={applyBodyPart}
          name='appliedHats'>

          </div>
        )}
      </div>
    )
  }
  export function  setMasksButtons(masks, resetPart, applyBodyPart) {
    const images = masks
    sortBodyImages(images)

    return(
      <div className='buttonsContainer'>
        <div
          className='hairButton'
          onClick={resetPart}
          id='appliedMasks'
          style={{fontSize: '35px'}}>
          X
        </div>
        {images.map(image =>
          <div
          key={image.id}
          id={image.name}
          style={{backgroundImage: `url(/api/images/${image.name}), url(/api/images/Head1.png)`}}
          className='hairButton'
          onClick={applyBodyPart}
          name='appliedMasks'>

          </div>
        )}
      </div>
    )
  }