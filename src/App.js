import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav/Nav'
import Logo from './components/logo/Logo';
import ParticleComponent from './components/particles/ParticleComponent'
import ImageLinkForm from './components/imagelink/ImageLinkForm';
import FaceRecog from './components/facerecog/FaceRecog';
import Rank from './components/rank/Rank';
import 'tachyons';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '05bbb7d6de9c43118c0cf7b9ecb86fed'
});

export class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:''
    }
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.input);
  }

  onSubmit = (event) => {
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
        function(response){
          console.log(response);
        },
        function(err){
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div className='App'> 
        <ParticleComponent />
        <Nav />
        <Logo />
        <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onSubmit}
            />
            <FaceRecog imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}


export default App;
