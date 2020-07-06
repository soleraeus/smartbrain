import React, {Component} from 'react';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const FaceDetect = new Clarifai.App({
 apiKey: '94ee4bfa7cde4437babdcf8cc436b0c6'
});

class App extends Component {

  constructor(){
    super();
    this.state ={
      input: '',
      ImageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    this.setState({box : {leftCol : clarifaiFace.left_col * 100 , rightCol : 100 - clarifaiFace.right_col * 100, topRow : clarifaiFace.top_row * 100, bottomRow : clarifaiFace.bottom_row * 100}});
    console.log(this.state.box);
  }

  onInputChange = (event)=>{
    this.setState({input: event.target.value});
  }

  onBtnSubmit = ()=>{
    this.setState({ImageUrl: this.state.input});
    FaceDetect.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => this.calculateFaceLocation(response))
    .catch(err => console.log(err));
  }

  render(){
    return(
      <>
      <header>
      <Logo />
      <Navigation />
      </header>
      <section>
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
      <FaceRecognition ImageUrl={this.state.ImageUrl} box={this.state.box} />
      </section>
      </>
    )
  }
}

export default App;
