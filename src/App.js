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
    }
  }

  onInputChange = (event)=>{
    this.setState({input: event.target.value});
  }

  onBtnSubmit = ()=>{
    this.setState({ImageUrl: this.state.input});
    FaceDetect.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
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
      <FaceRecognition ImageUrl={this.state.ImageUrl} />
      </section>
      </>
    )
  }
}

export default App;
