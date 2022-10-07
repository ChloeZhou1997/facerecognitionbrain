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


// const app = new Clarifai.App({
//  apiKey: '05bbb7d6de9c43118c0cf7b9ecb86fed'
// });

const USER_ID = 'j_o_z';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '05bbb7d6de9c43118c0cf7b9ecb86fed';
const APP_ID = 'my-first-application';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    


export class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  } 

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = (event) => {
    this.setState({imageUrl:this.state.input});

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": this.state.imageUrl
                  }
              }
          }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(result => result.json())
        .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
        .catch(error => console.log('error', error));
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
            <FaceRecog box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}


export default App;
