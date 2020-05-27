import React, {Component} from 'react';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
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
      <ImageLinkForm />
      <FaceRecognition />
      </section>
      </>
    )
  }
}

export default App;
