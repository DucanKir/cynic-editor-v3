import React from 'react'
import axios from 'axios'
// import htmlToImage from 'html-to-image'
import {newCharact, mishanya, defaultCharacter} from '../common/characters'
import Draggable from 'react-draggable';
import {setEyesButtons,
        setBrowsButtons,
        setMouthButtons,
        setHandsButtons,
        setLegsButtons,
        setBoobsButtons,
        setClothesButtons,
        setHairButtons,
        setBeardButtons,
        setGlassesButtons,
        setHatsButtons,
        setMasksButtons,} from '../common/buttons'

import {createBodyContainer } from '../common/editorBodyContainer'


class Game extends React.Component {

  //generating uuid for characters
  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  constructor() {
    super()
    this.state = {
      level: 'createComics',
      gameStart: false,
      backgrCount: 0,
      backgrounds: [],
      additionalBackgrounds: [],
      addBkgr: '',
      beards: [],
      boobs: [],
      body: [],
      brows: [],
      clothes: [],
      eyes: [],
      glasses: [],
      hair: [],
      hands: [],
      hats: [],
      heads: [],
      legs: [],
      masks: [],
      mouths: [],
      scars: [],
      empty: [],
      showDropdown: false,
      showBgDropdown: false,
      dropdownBtnText: 'Морда лица',
      faceButtonsText: 'Глаза',
      formData: {},
      buffer: '',
      currentCharacter: '',
      characters: '',
      scenes: '',
      textHeight: 0,
      resetOpen: false,
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
    }
    }
   
  }

  startGame = () => {
    let character = Object.keys(this.state.characters)
    this.setState({gameStart: true, currentCharacter: character})
    
  }

  //switch from character editor to comics editor and back
  changeLevel = (levelName) => {
    this.setState({level: levelName})
  }

  
  sortImages = (imgs, pattern) => {
    const backgrList = []
    imgs.filter(img => {
      if(img.name.includes(pattern)) {
        backgrList.push(img)
      }
    })
    return backgrList
  }

  previousBackground = () => {
    let images = this.state.backgrounds

    if(this.state.backgrCount !== 0) {
      if (images[this.state.backgrCount-1].name == 'Backgr10' ){
        this.setState({ 
          addBkgr: 'AddBkgr10_1', 
          backgrCount: this.state.backgrCount-1  
        })
      } else if (images[this.state.backgrCount-1].name == 'Backgr11'){
        this.setState({ 
          addBkgr: 'AddBkgr11_1', 
          backgrCount: this.state.backgrCount-1  
        })
      } else {
        this.setState({ 
          addBkgr: '', 
          backgrCount: this.state.backgrCount-1  
        })
      }
    } else {
        if (images[this.state.backgrounds.length-1].name == 'Backgr10' ){
          this.setState({ 
            addBkgr: 'AddBkgr10_1', 
            backgrCount: this.state.backgrounds.length-1 
          })
        } else if (images[this.state.backgrounds.length-1].name == 'Backgr11'){
          this.setState({ 
            addBkgr: 'AddBkgr11_1', 
            backgrCount: this.state.backgrounds.length-1
          })
        } else {
          this.setState({ 
            addBkgr: '', 
            backgrCount: this.state.backgrounds.length-1
          })
        }
    }
  }

  nextBackground = () => {
    let images = this.state.backgrounds

    if(this.state.backgrCount !== images.length-1) {
      if (images[this.state.backgrCount+1].name == 'Backgr10' ){
        this.setState({ 
          addBkgr: 'AddBkgr10_1', 
          backgrCount: this.state.backgrCount+1  
        })
      } else if (images[this.state.backgrCount+1].name == 'Backgr11'){
        this.setState({ 
          addBkgr: 'AddBkgr11_1', 
          backgrCount: this.state.backgrCount+1  
        })
      } else {
        this.setState({ 
          addBkgr: '', 
          backgrCount: this.state.backgrCount+1  
        })
      }
    } else {
        if (images[0].name == 'Backgr10' ){
          this.setState({ 
            addBkgr: 'AddBkgr10_1', 
            backgrCount: this.state.backgrounds.length+1 
          })
        } else if (images[0].name == 'Backgr11'){
          this.setState({ 
            addBkgr: 'AddBkgr11_1', 
            backgrCount: this.state.backgrounds.length+1
          })
        } else {
          this.setState({ 
            addBkgr: '', 
            backgrCount: 0
          })
        }
    }

  }

  setBackground = (e) => {
    let images = this.state.backgrounds

    images.filter(image => {
      if (image.name == e.target.id) {
        if (image.name == 'Backgr10') {
          this.setState({
            backgrCount: images.indexOf(image),
            addBkgr: 'AddBkgr10_1'
          })

        } else if (image.name == 'Backgr11'){
          this.setState({
            backgrCount: images.indexOf(image),
            addBkgr: 'AddBkgr11_1'
          })
        } else {
          this.setState({
            backgrCount: images.indexOf(image),
            addBkgr: ''
          })
        }
      }

    })
  }
  sortBodyImages = (array) => {
    array.sort((a, b) => {
      return +(a.name.replace(/[^0-9]/g, '')) - +(b.name.replace(/[^0-9]/g, ''))
    })
  }

  setBackgroundDropdown = () => {
    let images = this.state.backgrounds
    this.sortBodyImages(images)

    return(
      <div>
        {images.map(image =>
          <div onClick={this.setBackground} key={image.name} id={image.name} style={{backgroundImage: `url(/api/images/${image.name})`, height: "80px", width: "150px", backgroundSize: "100%", backgroundRepeat: "no-repeat", border: '1px solid black'}}>

          </div>
        )}
      </div>
    )
  }

  createCharacter() {
    const newCharacter = {...this.state.characters, 
      [this.uuidv4()]: newCharact
      }
    return newCharacter
                
  }

  newCharacter = () => {
    let listOfChars = Object.entries(this.state.characters)
    if(listOfChars.length < 6) {
    const characters = this.createCharacter()
    this.setState({characters})
    } else {
      this.setText('Хватит с тебя')
    }
  }

  chooseCharacter = (e) => {
    this.setState({currentCharacter: e.target.id})
  }

  deleteCharacter() {
    let characters = {}
    Object.assign(characters, this.state.characters)
    if(Object.keys(characters).length> 1) {
      delete characters[this.state.currentCharacter]
      let listOfChars = Object.entries(characters)
      this.setState({characters, currentCharacter: listOfChars[0][0]})
    } else {
      this.setText('Нельзя удалить единственного персонажа')
      
    }
    

  }

  setDefaultBody = () => {
    let returnObj = defaultCharacter
    let character = {...this.state.characters[this.state.currentCharacter], ...returnObj}
    const characters = {...this.state.characters, [this.state.currentCharacter]: character}
    this.setState({characters})
  }

  setMishanya = () => {
    let returnObj = mishanya
    let character = {...this.state.characters[this.state.currentCharacter], ...returnObj}
    const characters = {...this.state.characters, [this.state.currentCharacter]: character}
    this.setState({characters})
  }

  componentDidMount(){
    axios.get('/api/images/')
      .then(res => this.setState({
        backgrounds: this.sortImages(res.data, 'Backgr'),
        additionalBackgrounds: this.sortImages(res.data, 'Add'),
        beards: this.sortImages(res.data, 'Beard'),
        boobs: this.sortImages(res.data, 'Boo'),
        brows: this.sortImages(res.data, 'Brow'),
        body: this.sortImages(res.data, 'Bod'),
        clothes: this.sortImages(res.data, 'Clot'),
        eyes: this.sortImages(res.data, 'Eye'),
        glasses: this.sortImages(res.data, 'Glass'),
        hair: this.sortImages(res.data, 'Hai'),
        hands: this.sortImages(res.data, 'Hand'),
        hats: this.sortImages(res.data, 'Hat'),
        heads: this.sortImages(res.data, 'Head'),
        legs: this.sortImages(res.data, 'Leg'),
        masks: this.sortImages(res.data, 'Mask'),
        mouths: this.sortImages(res.data, 'Mout'),
        scars: this.sortImages(res.data, 'Scar'),
        empty: this.sortImages(res.data, 'No'),
        characters: this.createCharacter()


      }))
    
  }

  componentDidUpdate(){
    if (this.state.formData.text && this.state.textHeight !== this.refs.text.clientHeight){
      this.setState({textHeight: this.refs.text.clientHeight})

    }
    console.log()
  }

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown })
  }
  toggleBgDropdown = () => {
    this.setState({ showBgDropdown: !this.state.showBgDropdown })
  }

  closeDropdown = () => {
    this.setState({ showDropdown: false, showBgDropdown: false  })
  }

  closeBgDropdown = () => {
    this.setState({showBgDropdown: false  })
  }

  //to choose category
  switchControlPanelTab = (e) => {
    this.setState({
      dropdownBtnText: e.target.name,
      showDropdown: false
    })
  }

  //switching tabs eyes/mouth/brows
  switchFaceTab = (e) => {
    this.setState({
      faceButtonsText: e.target.name
    })
  }

  
  // character text coming from form
  handleChange = (e) => {
    let formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData, buffer:  e.target.value})
  }

  
  // character speaking
  setText = (text) => {
    let formData = { ...this.state.formData, text: text}
      this.setState({ formData })
      setTimeout(
        function() {
          let formData = { ...this.state.formData, text: this.state.buffer}
          this.setState({ formData });
        }
        .bind(this),
        1500
    );
  }

  applyBodyPart = (e) => {
    const stateName = e.target.getAttribute('name')
    const imgName = e.target.id
    let position = 0

    let returnObj = {}
    const pattern = imgName.substring(3, 0).toLowerCase()
    let targetState =''

    Object.keys(this.state).filter (key => {
      if(key.includes(pattern, 'bod')) {
        targetState = key
      }
    })
    
    if (imgName == 'Boobs4') {
      this.setText('Три сиськи? Зачетно!')
    }
    if (imgName == 'Mouth12') {
      this.setText('Чтооо за нааахуй?!')
    }
    if (imgName == 'Clothes_77') {
      this.setText('ГДЕ ДЕТОНАТОР?')
    }

    this.state[targetState].filter(obj => {
      if(obj.name == imgName){
        position = obj.position
        returnObj[stateName] = obj
      }
    })

    if (pattern == 'clo'){
      if (position == 3) {
        returnObj = {...returnObj, haHidden: true, clZindex: 2, leHidden: false, haHidden: true}
      } else if (position == 2){
        returnObj = {...returnObj, haHidden: false, clZindex: 2, leHidden: false, haHidden: false}
      } else if (position == 4){
        returnObj = {...returnObj, haHidden: false, clZindex: 1, leHidden: true, haHidden: true}
      } else {
        returnObj = {...returnObj, haHidden: false, clZindex: 1, leHidden: false, haHidden: false}
      }
    } else if (pattern == 'mas') {
      if (position == 2) {
        returnObj = {...returnObj, eyHidden: false, moHidden: true, brHidden: false, heHidden: false}
      } else if (position == 3) {
        returnObj = {...returnObj, eyHidden: true, moHidden: true, brHidden: true, heHidden: false}
      } else if (position == 4) {
        returnObj = {...returnObj, eyHidden: true, moHidden: true, brHidden: true, heHidden: true}
      }else if (position == 5) {
        returnObj = {...returnObj, eyHidden: false, moHidden: true, brHidden: false, heHidden: true}
      } else {
        returnObj = {...returnObj, eyHidden: false, moHidden: false, brHidden: false, heHidden: false}
      }
    }
    let character = {...this.state.characters[this.state.currentCharacter], ...returnObj}
    const characters = {...this.state.characters, [this.state.currentCharacter]: character}
    this.setState({characters})
  }

  // reset removes applied body part and sets everything as visible (for masks)
  resetPart = (e) =>{
    let character = {...this.state.characters[this.state.currentCharacter], [e.target.id]: '', eyHidden: false, moHidden: false, brHidden: false, heHidden: false}
    let characters = {...this.state.characters, [this.state.currentCharacter]: character}
    this.setState({characters})
  }

  handleSliderChange = (e) => {
    let character = {...this.state.characters[this.state.currentCharacter], [e.target.id]: e.target.value}
    let characters = {...this.state.characters, [this.state.currentCharacter]: character}
    this.setState({characters})
  }

  // takePicture = () => {
  //   var node = document.getElementById('capture');
 
  // htmlToImage.toPng(node)
  //   .then(function (dataUrl) {
  //     var img = new Image = ;
  //     img.src = dataUrl;
  //     document.body.appendChild(img);
  //   })
  //   .catch(function (error) {
  //   console.error('oops, something went wrong!', error);
  // });
  // }

  setFirstScene = () => {
    const firstScene = {
      [this.uuidv4]: {
        background: this.state.backgrounds[this.state.backgrCount],
        characters: '',
      }
    }
  }

  chooseScene = () => {

  }

  addScene = () =>{

  }

  deleteScene = () =>{
    
  }

  listChars = () => {
    let listOfChars = Object.entries(this.state.characters)

    return(
      <div>
        {listOfChars.map(char =>
          <div
          key={char[0]}
          className='hairButton'
          onClick={(e) => this.chooseCharacter(e)}
          id={char[0]}
          style={{backgroundColor: 'white', zIndex: '5',backgroundImage: `url(/api/images/${char[1].appliedMasks.name}), url(/api/images/${char[1].appliedBeard.name}), url(/api/images/${char[1].appliedHats.name}), url(/api/images/${char[1].appliedGlasses.name}), url(/api/images/${char[1].appliedEyes.name}), url(/api/images/${char[1].appliedMouths.name}), url(/api/images/${char[1].appliedBrows.name}), url(/api/images/${char[1].appliedHair.name}),  url(api/images/Head1.png), url(/api/images/${char[1].appliedClothes.name})`}}
          ></div>
        )}
       
      </div>
    )
  }

  

  createBackgroundsDropdown = () => {
    return(
      <div className='chooseBkgr'>
            <button className='chooseBkgrButton' onClick={this.previousBackground}>Туда</button>

            <div className="dropdown">
              <div 
                id="myDropdown" 
                className={this.state.showBgDropdown ? 'openBgDropdown ' : 'hideBgDropdown'}
              >
              {this.setBackgroundDropdown()}
              </div>
              <button onClick={this.toggleBgDropdown} className="dropbtnBg">
                Выбрать фон&nbsp;&nbsp; 
                <span style={{fontSize: '35px', marginTop: '10px'}}>^</span>
              </button>
            </div>
            <button className='chooseBkgrButton' onClick={this.nextBackground}>Сюда</button>
            
          </div>
    )
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  

  render(){
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition, backgrCount, backgrounds, characters, currentCharacter, addBkgr, gameStart, level, formData, textHeight, dropdownBtnText, showBgDropdown, showDropdown, faceButtonsText, eyes, mouths, brows, legs, hands, boobs, hair, clothes, hats, beards, glasses, masks} = this.state;

    if (!backgrounds[0] || !gameStart || characters === {}) {
      console.log()
      return (
        <div className="gamefield">
          <div className='splashscreen'>
            <h1 className="version">V2.0</h1>
            <h1 style={backgrounds[0] ? {display: 'none'}:{display: 'block'}} className="splashtext">Loading...</h1>
            <button style={backgrounds[0] ? {display: 'block'}:{display: 'none'}} onClick={this.startGame}className="startButton" >Жмяк</button>
          </div>
        </div>
      )
    }


    return (
      <div id="capture" 
      
        className="gamefield" 
        style={{ 
          marginTop: '5px', 
          backgroundImage: `url(/api/images/${backgrounds[backgrCount].name})`
        }}
      >


        <div className="createComics" style={level == 'createComics' ? {display: 'block'} : {display: 'none'}}>
          <div style={{top: '-7px', left: '-85px', position: 'absolute'}}>
            {this.listChars()}
          </div>
          {this.createBackgroundsDropdown()}
          <div style={{backgroundColor: 'rgba(255,255,255,0)', width: '980px', height: '570px', margin: '10px', overflow: 'hidden'}}>
            <Draggable handle=".drag"
             
              {...dragHandlers}>
                {createBodyContainer(characters, currentCharacter, this.closeBgDropdown)}
            </Draggable>
          </div>
          <input 
          maxLength='100' 
          ref="field" 
          onChange={this.handleChange} 
          name='text' 
          className="input is-small input-width charInput" 
          type="text" 
          placeholder="Реплика персонажа" 
        />
            
          <button style={{position: 'absolute', bottom: '10px'}} onClick={() => this.changeLevel('createCharacter')}>Назад к редактору персонажа</button>
          
        </div>




        <div className="createCharacter" style={level == 'createCharacter' ? {display: 'block'} : {display: 'none'}}>
          {this.createBackgroundsDropdown()}
          
          <div className='back' 
            onClick={this.closeDropdown} 
            style={{pointerEvents: 'none', backgroundImage: `url(/api/images/${addBkgr})`}}
          >
          </div>
          {createBodyContainer(characters, currentCharacter, this.closeBgDropdown)}
          <div className={!formData.text ? "" : 'pointer'} style={{pointerEvents: 'none'}}>

          </div>
          <div 
            className='characterText' 
            ref='text' 
            style={backgrounds[backgrCount].name == 'Backgr2' || backgrounds[backgrCount].name == 'Backgr5' ? {
              top: `${100-textHeight}px`, 
              color: 'white', 
              fontSize: '18px'
            }:{
              top: `${100-textHeight}px`, 
              color: 'black', 
              fontSize: '18px'
            }}
          >
            {formData.text}
          </div>
        
          

          <button className='chooseBkgrButton' 
            onClick={this.setDefaultBody} 
            style={{zIndex: '7', position: 'absolute', top: '19px', left: '15px', fontSize: '12px', padding: '3px', height: 'auto', width: '140px'}}>
              Вернуть все в зад
          </button>
          <button 
            className='chooseBkgrButton' 
            onClick={this.newCharacter} 
            style={{zIndex: '7', position: 'absolute', top: '44px', left: '15px', fontSize: '12px', padding: '3px', height: 'auto', width: '140px'}}>
              Добавить персонажа
          </button>
          <button 
            className='chooseBkgrButton' 
            onClick={this.deleteCharacter} 
            style={{zIndex: '7', position: 'absolute', top: '69px', left: '15px', fontSize: '12px', padding: '3px', height: 'auto', width: '140px'}}>
              Удалить персонажа
          </button>
          <button 
            className='chooseBkgrButton' 
            onClick={this.setMishanya} 
            style={{zIndex: '7', position: 'absolute', top: '94px', left: '15px', fontSize: '12px', padding: '3px', height: 'auto', width: '140px'}}>
              Щелк
          </button>


          
          <div  className="controlPanel" onClick={this.closeBgDropdown}>
            
            <div>
              <div className="charsList">
                {this.listChars()}
              </div>

              <button 
                className='chooseBkgrButton' 
                onClick={() => this.changeLevel('createComics')} 
                style={{zIndex: 999, position: 'absolute', bottom: '-5px', left: '-655px'}}>
                  Перейти к созданию комикса
              </button>

              <div className="dropdown">
                <button  
                  onClick={this.toggleDropdown} 
                  className="dropbtn">{dropdownBtnText}&nbsp;&nbsp; &nbsp;&nbsp; 
                  <span style={{fontSize: '16px', fontWeight: '600'}}>V</span>
                </button>
                <div id="myDropdown" className={` ${showDropdown ? 'openDropdown' : 'hideDropdown'}`}>
                  <a href="#"
                    onClick={this.switchControlPanelTab}
                    name='Морда лица'
                  >Морда лица</a>
                  <a href="#"
                    onClick={this.switchControlPanelTab}
                    name='Конечности и тушка'
                  >Конечности и тушка</a>
                  <a href="#"
                    onClick={this.switchControlPanelTab}
                    name='Шмот'
                  >Шмот</a>
                  <a href="#"
                    onClick={this.switchControlPanelTab}
                    name='Волосы'
                  >Волосы</a>
                  <a href="#"
                    onClick={this.switchControlPanelTab}
                    name='Всякое'
                  >Всякое</a>
                </div>
              </div>
            </div>

            <div className='scrollbox'>
              <div className={showDropdown ? 'openShade' : 'closeShade'} onClick={this.closeDropdown}>
              </div>
              <div className={dropdownBtnText === 'Морда лица' ? 'showTab' : 'hideTab'}>
                <div className="faceBtns" >
                  <button
                    onClick={this.switchFaceTab}
                    className={faceButtonsText === 'Глаза' ? "extradropbtnActive" : "extradropbtn"} 
                    name="Глаза">
                    Глаза
                  </button>
                  <button
                    onClick={this.switchFaceTab}
                    className={faceButtonsText === 'Рот' ? "extradropbtnActive" : "extradropbtn"} 
                    name="Рот">
                    Рот
                  </button>
                  <button
                    onClick={this.switchFaceTab}
                    className={faceButtonsText === 'Брови' ? "extradropbtnActive" : "extradropbtn"} 
                    name="Брови">
                    Брови
                  </button>
                </div >
                <div className={faceButtonsText === 'Глаза' ? 'showTab ' : 'hideTab'}>
                  <div className="sliderContainer">
                    <h1>Положение глаз</h1>
                    <input
                    type="range"
                    min="-15"
                    max="15"
                    className="slider"
                    value={characters[currentCharacter].eySliderValue}
                    id="eySliderValue"
                    step="5"
                    onChange={this.handleSliderChange} />
                  </div>
                  {setEyesButtons(eyes, this.applyBodyPart)}
                </div>
                <div className={faceButtonsText === 'Рот' ? 'showTab' : 'hideTab'}>
                  <div className="sliderContainer">
                    <h1>Положение рта</h1>
                    <input
                    type="range"
                    min="-15"
                    max="15"
                    className="slider"
                    value={characters[currentCharacter].moSliderValue}
                    id="moSliderValue"
                    step="5"
                    onChange={this.handleSliderChange} />
                  </div>
                  {setMouthButtons(mouths, this.applyBodyPart)}
                </div>
                <div className={` ${faceButtonsText === 'Брови' ? 'showTab' : 'hideTab'}`}>
                  <div className="sliderContainer">
                    <h1>Положение бровей</h1>
                    <input
                      type="range"
                      min="-15"
                      max="15"
                      className="slider"
                      value={characters[currentCharacter].brSliderValue}
                      id="brSliderValue"
                      step="5"
                      onChange={this.handleSliderChange} 
                    />
                  </div>
                  {setBrowsButtons(brows, this.resetPart, this.applyBodyPart)}
                </div>
              </div>
              <div className={` ${dropdownBtnText === 'Конечности и тушка' ? 'showTab' : 'hideTab'}`}>
                <div className="sliderContainer">
                  <h1>Размер тушки</h1>
                  <input
                    type="range"
                    min="350"
                    max="450"
                    className="slider"
                    value={characters[currentCharacter].boSliderValue}
                    id="boSliderValue"
                    step="5"
                    onChange={this.handleSliderChange} 
                  />
                </div>
                <br />
                <h1>Руки</h1>
                {setHandsButtons(hands, this.applyBodyPart)}
                <h1>Ноги</h1>
                {setLegsButtons(legs, this.applyBodyPart)}
                <h1>Сиськи!</h1>
                {setBoobsButtons(boobs, this.resetPart, this.applyBodyPart)}
              </div>
              <div className={` ${dropdownBtnText === 'Шмот' ? 'showTab' : 'hideTab'}`}>
                {setClothesButtons(clothes, this.applyBodyPart)}
              </div>
              <div className={` ${dropdownBtnText === 'Волосы' ? 'showTab' : 'hideTab'}`}>
                {setHairButtons(hair, this.resetPart, this.applyBodyPart)}
              </div>
              <div className={` ${dropdownBtnText === 'Всякое' ? 'showTab' : 'hideTab'}`}>
                <h1>Растительность</h1>
                {setBeardButtons(beards, this.resetPart, this.applyBodyPart)}
                <h1>Очки</h1>
                {setGlassesButtons(glasses, this.resetPart, this.applyBodyPart)}
                <h1>Головные уборы</h1>
                {setHatsButtons(hats, this.resetPart, this.applyBodyPart)}
                <h1>Маски</h1>
                {setMasksButtons(masks, this.resetPart, this.applyBodyPart)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
