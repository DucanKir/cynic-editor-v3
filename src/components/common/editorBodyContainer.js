import React from 'react'

export function createBodyContainer(characters, currentCharacter, closeDropdown) {
    return (
      <div className="bodyContainer" onClick={closeDropdown}>
            <div 
              className='clothes' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedClothes.name})`, 
                zIndex: characters[currentCharacter].clZindex, 
                backgroundSize: `${characters[currentCharacter].boSliderValue}px 515px`}}
              >
            </div>
            <div 
              className={!characters[currentCharacter].leHidden ? 'legs' : ""} 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedLegs.name})`, 
                backgroundSize: `${characters[currentCharacter].boSliderValue}px 515px`}}>

            </div>
            <div 
              className={!characters[currentCharacter].haHidden ? 'hands' : ""} 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedHands.name})`, 
                backgroundSize: `${characters[currentCharacter].boSliderValue}px 515px`}}>

            </div>
            <div 
              className={!characters[currentCharacter].heHidden ? 'head' : ""} 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedHeads.name})`}}>

            </div>
            <div 
              className='mask' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedMasks.name})`}}>

            </div>
            <div 
              className='hair' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedHair.name})`}}>

            </div>
            <div 
              className={!characters[currentCharacter].eyHidden ? 'eyes' : ""} 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedEyes.name})`, 
                top: `${characters[currentCharacter].eySliderValue}px`}}>

            </div>
            <div 
              className={!characters[currentCharacter].moHidden ? 'mouth' : ""} 
              style={{
                pointerEvents: 'none',
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedMouths.name})`, 
                top: `${characters[currentCharacter].moSliderValue}px`}}>

            </div>
            <div 
              className='brows' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedBrows.name})`, 
                top: `${characters[currentCharacter].brSliderValue}px`}}>

            </div>
            <div 
              className='hat' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedHats.name})`}}>

            </div>
            <div 
              className='beard' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedBeard.name})`}}>

            </div>
            <div 
              className='boobs' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedBoobs.name})`}}>

            </div>
            <div 
              className='glasses' 
              style={{
                pointerEvents: 'none', 
                backgroundImage: `url(/api/images/${characters[currentCharacter].appliedGlasses.name})`}}>

            </div>
            <div className='drag' style={{backgroundColor: 'rgba(0,0,0,0)', width: '220px', height: '330px', position: 'absolute', top: '120px', left: '80px', zIndex: 99}}></div>
          </div>
    )
  }