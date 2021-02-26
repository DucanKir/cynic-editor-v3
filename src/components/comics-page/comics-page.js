import React from 'react';
import './comics-page.styles.scss'
import domtoimage from 'dom-to-image';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectAllScenes } from '../../redux/scenes.selector';
import { Link, withRouter } from 'react-router-dom'

class ComicsPage extends React.Component {

    state = {
        url: '111'
    }
    
    componentDidMount () {
        const component = this
        let node = document.getElementById('final-capture');
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                component.setState({url: dataUrl})
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    render(){
        const {allScenes} = this.props
        return (
            allScenes.scenes.length > 0 ?
            <div className='comics-screen'>
                <div className='comics-container'>
                    <div className='buttons-container'>
                        <Link 
                            className='result-button'
                            to="/"
                        >
                            Закрыть
                        </Link>
                        <a 
                            href={this.state.url} 
                            download="cynic-mansion.png"
                            className='result-button'
                        >
                            Скачать
                        </a>
                    </div>
                    <div id='final-capture'>
                        {
                            allScenes.scenes.map(scene => (
                                <img className="comics-scene" key={scene.id} src={scene.data} />
                            ))
                        }
                    </div>
                    
                </div>
            </div>
            :
            ""

    ) }
}

const mapStateToProps = createStructuredSelector({
    allScenes: selectAllScenes
}) 

export default connect(mapStateToProps)(withRouter(ComicsPage));