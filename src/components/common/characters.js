function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export const defaultCharacter = {
    appliedBeard: {name: 'Non'},
    appliedBoobs:  {name: 'Non'},
    appliedBrows:  {name: 'Non'},
    appliedClothes: {name: 'Body'},
    appliedEyes: {name: 'Eyes0'},
    appliedGlasses:  {name: 'Non'},
    appliedHair:  {name: 'Non'},
    appliedHands: {name: 'Hands1'},
    appliedHats:  {name: 'Non'},
    appliedHeads: {name: 'Head1'},
    appliedLegs: {name: 'Legs2_0'},
    appliedMasks:  {name: 'Non'},
    appliedMouths: {name: 'Mouth6'},
    heHidden: false,
    haHidden: false,
    leHidden: false,
    eyHidden: false,
    moHidden: false,
    brHidden: false,
    clZindex: 0,
    eySliderValue: 0,
    moSliderValue: 0,
    brSliderValue: 0,
    boSliderValue: 400,
  }

export const mishanya = {
    appliedBeard: {name: 'Non'},
    appliedBoobs:  {name: 'Non'},
    appliedBrows:  {name: 'Non'},
    appliedClothes: {name: 'Clothes_74'},
    appliedEyes: {name: 'Eyes9'},
    appliedGlasses:  {name: 'Non'},
    appliedHair:  {name: 'Hair_30'},
    appliedHands: {name: 'Hands2'},
    appliedHats:  {name: 'Non'},
    appliedHeads: {name: 'Head1'},
    appliedLegs: {name: 'Legs2_0'},
    appliedMasks:  {name: 'Non'},
    appliedMouths: {name: 'Mouth2'},
    heHidden: false,
    haHidden: false,
    leHidden: false,
    eyHidden: false,
    moHidden: false,
    brHidden: false,
    clZindex: 2,
    eySliderValue: 0,
    moSliderValue: 0,
    brSliderValue: 0,
    boSliderValue: 430,
  }

let UUID = uuidv4()

export  const newCharact = {
        uuid: '',
        ...defaultCharacter
      }
    
