import React, {Component} from 'react';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

class App extends Component {
  render(){
    return(
      <>
      <header>
      <Logo />
      <Navigation />
      </header>
      <section>
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
      </section>
      </>
    )
  }
}

export default App;
